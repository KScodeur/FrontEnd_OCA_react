import React, { useEffect, useState } from 'react';
import { useNavigate} from 'react-router-dom';


import Layout from '../components/Layout';



export default function Eleves() {
  const navigate = useNavigate();
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [nomParent, setNomParent] = useState(null);
  const [password, setPassword] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/eleves');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Une erreur s\'est produite :', error);
    }
  };

  const openModal = (student) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedStudent(null);
    setIsModalOpen(false);
  };


  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();
    try {
      // Envoi des informations de connexion à l'API avec l'ID de l'élève
      const response_2 = await fetch(`http://localhost:3000/eleves/${selectedStudent.id}/parent`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nomParent: nomParent,
          password: password,
        }),
      });

      const jsonDataAuthentificate = await response_2.json();

      if(jsonDataAuthentificate.statut === 'OK'){
        setLoggedIn(true);
      }else{
        setError("Mot de passe incorrect ou identifiant invalide. Veuillez réessayer.");
      }
    } catch (error) {
      console.error('Une erreur s\'est produite lors de l\'authentification :', error);
      return error
      }
  };


  useEffect(() => {
    fetchData();

    if (isLoggedIn) {
      // Redirigez automatiquement l'utilisateur vers la page de détails élève
      navigate('/details', { state: { student: selectedStudent } });
    }
  }, [isLoggedIn,navigate, selectedStudent]);

 

  return (
    <Layout>
        <div className='md:px-10 lg:px-0'>
          <h1 className='flex justify-center mt-6 lg:py-10 mb-10 font-bold lg:text-3xl text-[#343a40]' id='eleves'>
                  Nos Elèves
          </h1>
            <div className='lg:px-[10rem] grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:gap-[1rem] lg:gap-[3rem] place-items-center  sm:pl-0'>
              {data.map((student) => (
                      <div key={student.id}>
                  <button
                    className='border border-solid rounded-sm border-[#FEF549]  sm:px-4 sm:py-4 sm:min-w-[250px] md:px-2 md:py-8  lg:px-[3rem] lg:py-[2rem]  mb-10 '
                    onClick={() => openModal(student)}
                  >
                    <div>
                      <div className='sm:w-[120px] sm:h-[120px] lg:w-[200px] lg:h-[200px] rounded-full flex justify-center items-center mx-auto mb-5'>
                        {/* Chargez l'image dynamiquement à partir des données de l'API */}
                        <img src="/src/assets/images/accueil_1.JPG" alt='' className='sm:w-[120px] sm:h-[120px] lg:w-[300px] lg:h-[200px] rounded-full' />
                      </div>
                      <span className='flex justify-center lg:text-2xl'>
                        {student.nom}  {student.prenom}
                      </span>
                    </div>
                  </button>
                </div>
              ))}
            </div>

            {isModalOpen && selectedStudent && (
              <>
                <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
                <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
                  <div className='relative w-auto my-6 mx-auto max-w-[30rem]'>
                    <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                      <div className='flex items-start justify-between sm:py-2 p-5 border-b border-solid border-blueGray-200 rounded-t'>
                        <h3 className='sm:text-sm md:text-md  lg:text-3xl font-semibold'>Voir les informations de {selectedStudent.nom}</h3>
                        <button
                          className='p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                          onClick={closeModal}
                        >
                          <span className='bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none'>×</span>
                        </button>
                      </div>


                      <form onSubmit={handleLoginFormSubmit}>
                        <div className='relative p-6 flex-auto'>
                          <div className='mb-4'>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username'>
                              Nom d'utilisateur
                            </label>
                            <input
                              type='text'
                              id='username'
                              name='username'
                              value={nomParent}
                              onChange={(e) => setNomParent(e.target.value)}
                              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                              placeholder="Nom d\'utilisateur"
                            />
                          </div>
                          <div className='mb-4'>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
                              Mot de passe
                            </label>
                            <input
                              type='password'
                              id='password'
                              name='password'
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                              placeholder='Mot de passe'
                            />
                          </div>

                          {error && (
                <div style={{ color: 'red', marginTop: '10px' }}>
                  {error}
                </div>
              )}
                          <button
                            type='submit'
                            className='bg-blue-500 text-white active:bg-blue-800 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg'
                          >
                            Se connecter
                          </button>
                        </div>
                      </form>

                      <div className='absolute right-0 sm:right-[-3%] sm:top-[-3%] flex items-center justify-end sm:p-0 lg:p-6 border-solid border-blueGray-200 rounded-b'>
                        <button 
                          type='button'
                          onClick={closeModal}
                          class="hover:bg-red-500 w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center background-transparent">
                          <span class="text-white font-bold">X</span>
                        </button>

                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
        </div>
    </Layout>
  );
}















































/*import React, { useEffect, useState } from 'react';
import api from '../components/api';
import Layout from '../components/Layout'

export default function Eleves() {
  const [showModal, setShowModal] = useState(false);

  const [data, setData] = useState([]);
  const [password, setPassword] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);



  const handlePasswordSubmit = (password) => {
    // Vérifie le mot de passe ici
    // Si le mot de passe est valide, redirige vers une autre page
    if (password === 'motdepasse') {
      // Remplace '/nouvelle-page' par l'URL de la nouvelle page
      window.location.href = '/nouvelle-page';
    } else {
      // Gère le cas où le mot de passe est incorrect
      alert('Mot de passe incorrect');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/eleves');
      const jsonData = await response.json();
      setData(jsonData);

    
    } catch (error) {
      console.error('Une erreur s\'est produite :', error);
    }
  };
 

  
  return (
    <Layout>
      <h1 className='flex justify-center mt-6 mb-10 font-bold text-3xl text-[#343a40]' id='eleves'>Nos Elèves</h1>
      <div className='grid grid-cols-4 gap-3 pl-[225px]'>
        {data.map((item, index) => (
          
          <div >

            <button className='border border-solid rounded-sm border-[#FEF549] px-8 py-10 w-[200px] mb-10 ' onClick={() => setShowModal(true)} key={index}>
                <div>

                    <div className='w-20 h-20 rounded-full 
                    flex justify-center items-center mx-auto'>

                        <img src="/src/assets/images/accueil_1.JPG" alt="" className='w-[250px] h-20 rounded-full '/>
                    </div>
                    <span className='flex justify-center'>{item.nom}{item.prenom}</span>
                  
                </div>
            </button>
            {showModal ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-sm">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                        <h3 className="text-3xl font-semibold">
                          Modal Title
                        </h3>
                        <button
                          className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setShowModal(false)}
                        >
                          <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                          </span>
                        </button>
                      </div>
                      <div className="relative p-6 flex-auto">
                        <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                        {item.prenom}
                        </p>
                      </div>
                      <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Close
                        </button>
                        <button
                          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
                </div>
              ))}
          </div>

          <>
    
    </>
      

    </Layout>




  );
}*/