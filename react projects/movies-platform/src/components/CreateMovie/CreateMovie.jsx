import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { createMovie } from "../../libs/movie";
import MovieForm from "../MovieForm/MovieForm";

export default function CreateMovie() {
    const [saveSuccess, setSaveSuccess] = useState(false);
    const { auth } = useContext(AuthContext); 
    const navigate = useNavigate();

    useEffect(() => {
        if (!auth) {
            navigate('/login'); 
        }
    }, [auth, navigate]);

    function submit(movie) {
        createMovie(movie, auth).then(() => {
            setSaveSuccess(true);
        });
    }


    return (
        <section>
            <h2 className="text-center mt-8 text-3xl font-bold">Create Movie</h2>
            {saveSuccess && <p>Movie has been created</p>}
            <MovieForm submit={submit} buttonTitle={"Create Movie"} />
        </section>
    );
}
