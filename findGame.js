export var findGame = function(db){
    Window.findGame = function(){

        //what database am I even using...?

        //where
/*         db.collection("pending-matches")
        .get(function(data){
        })
        .then(function(querySnapshot) {

            console.log(querySnapshot);
            if (querySnapshot.empty){
                console.log("moose")
            }
            

            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                console.log("searching for a game");
                console.log(doc.id, " => ", doc.data());
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        }); */



    };
}