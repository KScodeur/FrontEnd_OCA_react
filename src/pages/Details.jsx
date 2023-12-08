import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../components/Layout';

const Details = () => {
  const [formationsWithNotes, setFormationsWithNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const { student } = location.state;


  const convertByteaToImageURL = (byteaData) => {

      const byteArray = new Uint8Array(byteaData.data);
      const blob = new Blob([byteArray], { type: 'image/jpeg' });
      return URL.createObjectURL(blob)
    }
  useEffect(() => {
    const fetchNoteData = async () => {
      try {
        const response_3 = await fetch(`http://localhost:3000/eleves/${student.id}/notes`, {
          method: 'GET',
        });
        const jsonData = await response_3.json();
        setFormationsWithNotes(jsonData);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchNoteData();
  }, [student]);


  return (
    <Layout>
     <div className='flex justify-center '> 
      <div className=' items-center align '>
        <h1 className='flex justify-center mt-6 mb-10 font-bold md:text-2xl lg:text-3xl text-[#343a40]'>Détails des notes de {student.nom}</h1>
        <div className='border border-solid rounded-lg md:px-8 md:py-10 shadow-xl lg:min-w-[800px]'>
          <div className='rounded-full flex justify-center items-center mx-auto mb-3 mt-3'>
              <img src="/src/assets/images/beni.jpg" alt="" className='w-[120px] h-[120px] rounded-full '/>
          </div>
          <div className='sm:flex sm:justify-center md:block mt-10'>
            <table className=''>
              <tbody>
                <tr>
                  <td>Nom: </td>
                  <td></td>
                  <td className='font-semibold'>{student.nom}</td>
                </tr>
                <tr>
                  <td>Prénoms: </td>
                  <td className='w-2'></td>
                  <td className='font-semibold'>{student.prenom}</td>
                </tr>
                <tr>
                  <td>Classe: </td>
                  <td></td>
                  <td className='font-semibold'>{student.classe}</td>
                </tr>
                <tr>
                  <td>Date de naissance: </td>
                  <td></td>
                  <td className='font-semibold'>{student.dateNaissance}</td>
                </tr>
                <tr>
                  <td>Projet: </td>
                  <td></td>
                  <td className='font-semibold'>{student.projet}</td>
                </tr>
              </tbody>
            </table>
          </div>
     
          <div className='overflow-auto rounded-lg shadow mt-5'>
          <table className='scroll w-full'>
            <thead className='bg-[#FEF549] border-b-2 border-gray-200'>
              <tr>
                <th className='p-3 text-sm text-red-500 font-semibold tracking-wide text-left'>Modules</th>
                <th className='p-3 text-sm text-red-500 font-semibold tracking-wide text-left'>Assiduité</th>
                <th className='p-3 text-sm text-red-500 font-semibold tracking-wide text-left'>Performance</th>
                <th className='p-3 text-sm text-red-500 font-semibold tracking-wide text-left'>Commentaire</th>
                <th className='p-3 text-sm text-red-500 font-semibold tracking-wide text-left'></th>
              </tr>
            </thead>
            <tbody className=''>
            {formationsWithNotes.map(formation => (
              <tr key={formation.formationId} className='border'>
                <td className='pl-2'>{formation.formationName}</td>
                {formation.notes.map(note => (
                  <React.Fragment key={note.id}>
                    <td>{note.assiduite}</td>
                    <td>{note.performance}</td>
                    <td>{note.commentaire}</td>
                  </React.Fragment>
                ))}
              </tr>
            ))}


            </tbody>
          </table>
        </div>
        </div>
        
      </div>

     </div>
    </Layout>
  );
};

export default Details;
