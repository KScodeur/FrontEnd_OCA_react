import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../components/Layout';

const Details = () => {
  const [formationsWithNotes, setFormationsWithNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const { student } = location.state;

  useEffect(() => {
    const fetchNoteData = async () => {
      try {
        const response_3 = await fetch(`http://localhost:3000/eleves/${student.id}/notes`, {
          method: 'GET',
        });
        const jsonData = await response_3.json();
        setFormationsWithNotes(jsonData);
        console.log(jsonData)
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
        <h1 className='flex justify-center mt-6 mb-10 font-bold text-3xl text-[#343a40]'>Détails des notes de {student.nom}</h1>
        <div className='border border-solid rounded-lg w-[400px] px-8 py-10 shadow-xl'>
          <div className='w-[120px] h-[120px] rounded-full 
          flex justify-center items-center mx-auto mb-3'>
              <img src="/src/assets/images/accueil_1.JPG" alt="" className='w-[120px] h-[120px] rounded-full '/>
          </div>
          <p className='flex justify-between text-2xl'>
            <span>Nom: </span><span className='border'>{student.nom}</span>
          </p>
          <p className='flex justify-between text-2xl'>
            <span>Prénom: </span><span className=''>{student.prenom}</span>
          </p>
         

          <ul>
        {formationsWithNotes.map(formation => (
          <li key={formation.formationId}>
            <p>Module: {formation.formationName}</p>
            <ul>
              {formation.notes.map(note => (
                <li key={note.id}>
                  <p>Note Assiduité pour {formation.formationName}: <span>{note.assiduite}</span></p>
                  <p>Commentaire: <span>{note.commentaire}</span></p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

        </div>
      </div>

     </div>
    </Layout>
  );
};

export default Details;
