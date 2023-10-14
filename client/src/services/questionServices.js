import axios from "../hooks/useAxios";


const getQuestions = async () => {

    try {
        let res = await axios.get('/get');
        return res;
    } catch (error) {
        console.log(error)
    }
};

export { getQuestions };
