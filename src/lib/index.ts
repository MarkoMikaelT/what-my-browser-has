//#region UserAgent
export function getUseAgent(){
    const agent = navigator.userAgent
    return agent.toString()
}
//#endregion
//#region Geolocation
export async function getLocation(){
    if ("geolocation" in navigator) {
        let result = {latitude: 0, longitude: 0}
        const geo = navigator.geolocation
        return new Promise((resolve, reject) => {
            geo.getCurrentPosition( (pos) =>{
                result.latitude = pos.coords.latitude
                result.longitude = pos.coords.longitude
                resolve(successLocation(result))
            }, 
            (error) =>{reject(errorLocation(error))},
            { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true }
            )
        })
    } else{
        return null
    }
}

function successLocation(coords: {latitude: number, longitude: number}){
    console.log(coords)
    return coords
}

function errorLocation(err: GeolocationPositionError){
    console.log(err)
    return err.message
}
//#endregion

export async function getMedia() {
    await navigator.mediaDevices.getUserMedia({audio: true, video: true})
    
    const md = await navigator.mediaDevices.enumerateDevices()
    return md
}
