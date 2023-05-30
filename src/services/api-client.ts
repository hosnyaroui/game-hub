import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
params: {
    key: 'fb7f3842e60b46e3870dac4c1f480e14'
}

})