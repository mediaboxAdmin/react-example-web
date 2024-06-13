import { Button } from "primereact/button"
import { Dropdown } from "primereact/dropdown"
import { InputText } from "primereact/inputtext"
import { useCallback, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import Loading from "../../../components/app/Loading"
import fetchApi from "../../../helpers/fetchApi"
import { useForm } from "../../../hooks/useForm"
import { useFormErrorsHandle } from "../../../hooks/useFormErrorsHandle"
import { setBreadCrumbItemsAction, setToastAction } from "../../../store/actions/appActions"

// formulaire à modifier 
const initialForm = {
    ID_CATEGORY: null,
    NAME_ARTICLE: "",
    PRICE: "",
}

const EditArticlePage = () => {

    const dispacth = useDispatch()
    const [data, handleChange, setData, setValue] = useForm(initialForm)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const navigate = useNavigate()
    const [categories, setCategories] = useState([])
    const { ID_ARTICLE } = useParams()

    // pour la gestion du formulaire 
    const { hasError, getError, setErrors, checkFieldData, run, isValidate, setError } = useFormErrorsHandle(data, {
        NAME_ARTICLE: {
            required: true,
            alpha: true,
            length: [2, 20]
        },
        PRICE: {
            required: true,
        },
        category: {
            required: true
        }
    })

    // fonction qu'on appelle pour faire la modification
    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            if (!isValidate()) return false
            setIsSubmitting(true)
            const form = new FormData()
            form.append("ID_CATEGORY", data.category.code)
            form.append("NAME_ARTICLE", data.NAME_ARTICLE)
            form.append("PRICE", data.PRICE)

            const res = await fetchApi(`/article/update/${ID_ARTICLE}`, {
                method: 'PUT',
                body: form
            })

            dispacth(setToastAction({ severity: 'success', summary: 'Article enregistré', detail: "L'article a été enregistré avec succès", life: 5000 }))
            navigate('/article')
        } catch (error) {
            console.log(error)
            if (error.httpStatus == "UNPROCESSABLE_ENTITY") {
                setErrors(error.result)
            } else {
                dispacth(setToastAction({ severity: 'error', summary: 'Erreur du système', detail: 'Erreur du système, réessayez plus tard', life: 5000 }));
            }
        } finally {
            setIsSubmitting(false)
        }
    }

    useEffect(() => {
        dispacth(setBreadCrumbItemsAction([
            // administration_routes_items.utilisateurs,
            // administration_routes_items.new_utilisateurs
        ]))
        return () => {
            dispacth(setBreadCrumbItemsAction([]))
        }
    }, [])


    // pour recuperer l'objet de l'article actuel
    useEffect(() => {
        (async () => {
            try {
                const res = await fetchApi(`/article/get/${ID_ARTICLE}`);
                const uti = res.result;
                setData({
                    PRICE: uti.PRICE,
                    NAME_ARTICLE: uti.NAME_ARTICLE,
                    category: {
                        name: uti.category.DESIGNATION,
                        code: uti.category.ID_CATEGORY,
                    },
                });
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);


    // pour recuperer la catégorie correspondante à l'article actuelle
    const fetchCatgeories = useCallback(async () => {
        try {
            const res = await fetchApi("/category/all");
            setCategories(
                res.result.data.map((category) => {
                    return {
                        code: category.ID_CATEGORY,
                        name: category.DESIGNATION,
                    };
                })
            );
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        fetchCatgeories();
    }, []);




    return (
        <>
            {isSubmitting ? <Loading /> : null}
            <div className="px-4 py-3 main_content bg-white has_footer">
                <div className="">
                    <h1 className="mb-3">Modifier article</h1>
                    <hr className="w-100" />
                </div>
                <form className="form w-75 mt-5" onSubmit={handleSubmit}>
                    <div className="form-group col-sm">
                        <div className="row">
                            <div className="col-md-4">
                                <label htmlFor="NAME_ARTICLE" className="label mb-1">Article</label>
                            </div>
                            <div className="col-sm">
                                <InputText autoFocus type="text" placeholder="Nom de l'article " id="NAME_ARTICLE" name="NAME_ARTICLE" value={data.NAME_ARTICLE} onChange={handleChange} onBlur={checkFieldData} className={`w-100 is-invalid ${hasError('NAME_ARTICLE') ? 'p-invalid' : ''}`} />
                                <div className="invalid-feedback" style={{ minHeight: 21, display: 'block' }}>
                                    {hasError('NAME_ARTICLE') ? getError('NAME_ARTICLE') : ""}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group col-sm mt-5">
                        <div className="row">
                            <div className="col-md-4">
                                <label htmlFor="PRICE" className="label mb-1">Prix</label>
                            </div>
                            <div className="col-sm">
                                <InputText type="text" placeholder="Prix" name="PRICE" id="PRICE" value={data.PRICE} onChange={handleChange} onBlur={checkFieldData} className={`w-100 is-invalid ${hasError('PRICE') ? 'p-invalid' : ''}`} />
                                <div className="invalid-feedback" style={{ minHeight: 21, display: 'block' }}>
                                    {hasError('PRICE') ? getError('PRICE') : ""}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group col-sm mt-5">
                        <div className="row">
                            <div className="col-md-4">
                                <label htmlFor="DESIGNATION" className="label mb-1">Catégorie</label>
                            </div>
                            <div className="col-sm">
                                {/* pour faire le select on fait l'appel du composant Dropdown de primereact qu'on peut trouver sur primereact.com/dropdonw */}
                                <Dropdown
                                    value={data.category}
                                    options={categories}
                                    onChange={e => setValue("category", e.value)}
                                    optionLabel="name"
                                    id="category"
                                    filter
                                    filterBy="name"
                                    placeholder=" Sélectionnez la catégorie"
                                    emptyFilterMessage="Aucun élément trouvé"
                                    emptyMessage="Aucun élément trouvé"
                                    name="category"
                                    onHide={() => {
                                        checkFieldData({ target: { name: "category" } })
                                    }}
                                    className={`w-100 ${hasError('category') ? 'p-invalid' : ''}`}
                                    showClear
                                />
                                <div className="invalid-feedback" style={{ minHeight: 21, display: 'block' }}>
                                    {hasError('category') ? getError('category') : ""}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ position: 'absolute', bottom: 0, right: 0 }} className="w-100 d-flex justify-content-end shadow-4 pb-3 pr-5 bg-white">
                        <Button label="Reinitialiser" type="reset" outlined className="mt-3" size="small" onClick={e => {
                            e.preventDefault()
                            setData(initialForm)
                            setErrors({})
                        }} />
                        <Button icon="pi pi-check" label="Envoyer" type="submit" className="mt-3 ml-3" size="small" disabled={!isValidate() || isSubmitting} />
                    </div>
                </form>
            </div>

        </>
    )
}

export default EditArticlePage