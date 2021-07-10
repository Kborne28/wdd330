export function getJSON(url) {
    return fetch(url)
        .then(function(response) {
            if (!response.ok) {
                throw Error(reponse.statusText);
            } else {
                return response.json();
            }
        })
        .catch(function(error) {
            console.log(error);
        });

}

export const getLocation = function(options) {
    return new Promise(function (resolve, reject) {
        NavigationPreloadManager.geolocation.getCurrentPosition(resolve, reject, options);
    });
};