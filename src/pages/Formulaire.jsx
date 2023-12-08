import axios from 'axios';
import React, { useEffect, useState } from 'react';

const FormComponent = () => {
    const url= "http://localhost:3000/parents"
  const [formData, setFormData] = useState({
    parent: '',
    nom: '',
    prenom: '',
    dateNaissance: '',
    classe: '',
    projet: '',
    imageData: null,
  });
  const [data, setData] = useState([]);



  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const jsonData = await response.json();

      console.log(jsonData)
      setData(jsonData);
    } catch (error) {
      console.error('Une erreur s\'est produite :', error);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });




  };

  const handlePhotoChange = (e) => {
    setFormData({
      ...formData,
      imageData: e.target.files[0], // Récupère le fichier image
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {parent, nom, prenom, dateNaissance, classe, projet, imageData}= formData
    // Crée un objet FormData pour envoyer les données, y compris le fichier image
    const formDataToSend = new FormData();
    formDataToSend.append('parent', parent);
    formDataToSend.append('nom', nom);
    formDataToSend.append('prenom', prenom);
    formDataToSend.append('dateNaissance', dateNaissance);
    formDataToSend.append('classe', classe);
    formDataToSend.append('projet', projet);
    formDataToSend.append('imageData', imageData);
    console.log(formDataToSend);
   try {
      // Remplacez l'URL_API par l'URL de votre API NestJS
      const response = await fetch('http://localhost:3000/eleves',  {
        method : 'POST',
        body: formDataToSend,
      });
      console.log('Réponse de l\'API:', response.data);
      // Réinitialise le formulaire après soumission réussie si nécessaire
      /* setFormData({
        parent: '',
        nom: '',
        prenom: '',
        dateNaissance: '',
        classe: '',
        projet: '',
        photo: null,
      });*/
    } catch (error) {
      console.error('Erreur lors de la soumission du formulaire:', error);
    }
  };

  useEffect(()=>{
    fetchData();
  },[])

  
  return (
 

        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" method="POST" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='parent' className="block text-sm font-medium leading-6 text-gray-900">
                    Nom du parent
                    </label>
                    <select id="parent" name="parent"
                        value={formData.parent} onChange={handleInputChange}
                        className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    <option value="">Selectionner un parent</option>
                   {data.map((parent)=>(
                    <option key={parent.id} value={parent.id.toString()}>{parent.nomParent}</option>
                   ))}
                    </select>
                </div>

                <div>
                    <label htmlFor='nom' className="block text-sm font-medium leading-6 text-gray-900">
                    Nom
                    </label>
                    <input
                        id="nom"
                        name="nom"
                        type="nom"
                        value={formData.nom} onChange={handleInputChange}
                        className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                <div>
                    <label htmlFor='prenom' className="block text-sm font-medium leading-6 text-gray-900">
                    Prénom
                    </label>
                    <input
                        id="prenom"
                        name="prenom"
                        type="prenom"
                        value={formData.prenom} onChange={handleInputChange}
                        className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                <div>
                    <label htmlFor='dateNaissance' className="block text-sm font-medium leading-6 text-gray-900">
                    Date de naissance
                    </label>
                    <input
                        id="dateNaissance"
                        name="dateNaissance"
                        type=""
                        value={`${formData.dateNaissance}`} onChange={handleInputChange}
                        className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                <div>
                    <label htmlFor='classe' className="block text-sm font-medium leading-6 text-gray-900">
                    Classe
                    </label>
                    <input
                        id="classe"
                        name="classe"
                        type="classe"
                        value={formData.classe} onChange={handleInputChange}
                        className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                <div>
                    <label htmlFor='projet' className="block text-sm font-medium leading-6 text-gray-900">
                    Projet
                    </label>
                    <input
                        id="projet"
                        name="projet"
                        type="projet"
                        value={formData.projet} onChange={handleInputChange}
                        className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                <div>
                    <label htmlFor='imageData' className="block text-sm font-medium leading-6 text-gray-900">
                    photo
                    </label>
                    <input
                        id="imageData"
                        type='file'
                         onChange={handlePhotoChange}
                        className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                <div>
                    <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                    Sign in
                    </button>
                </div>
            </form>
      
          </div>
        </div>
    )
  };
  

export default FormComponent;
