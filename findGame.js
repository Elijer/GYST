export var findGame = function(db){
    Window.findGame = function(){

        db.collection("pending-matches").orderBy("createdAt").limit(1).where("player2", "==", null)
        .get()
        .then(function(querySnapshot) {

            console.log(querySnapshot);

            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                console.log("searching for a game");
                console.log(doc.id, " => ", doc.data());
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });



    };
}