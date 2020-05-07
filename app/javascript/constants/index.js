export const BASEURL = (window.location.hostname !== "localhost") ? window.location.protocol + "//" + window.location.hostname : "http://localhost:3000"
export const BASEURLPRO = (process.env.REACT_APP_BASE_URL) ? process.env.REACT_APP_BASE_URL : "http://localhost:3000"



//comment