var slideDB = function (){

	var db = null;
	var transaction;
	var dbIsOpen;
	var currentRequest;
	var canvas;

	return {
		openDB : function (){
			if (window.openDatabase){
				db = window.openDatabase("SlidesDB", "0.1", "Fadboard's slides DB", 2*1024*1024);
			}

			if (!db){
				alert("WebSQL is not supported by your browser!");
				Console.log("Failed to allocate open or create a DB for fadboard's images.");
				return;
			}

			//If we reach we can attempt to create the Table
			db.transaction( function (t) {
					t.executeSql("CREATE TABLE IF NOT EXISTS SLIDESDB (id PRIMARY KEY, image Text, CREATE_DATE DATE, Image_name TEXT)");
			});
			
		},
		closeDB : function (){

		},
		saveCurrImageToDB : function () {
			//saves the currently displayed image to the database
			if (!db){
				alert("No db object exists - Ensure that the DB is created!");
				return;
			}
			//retrieve the current image DB
			if (!canvas){
				canvas = document.createElement('canvas');
			}

			var theImage = $(".slide[data_index='0']");

			if (theImage){
				alert("Got an image!");
			}

		}
	}

}();
