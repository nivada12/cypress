<script type="text/javascript">
			var myArray1 = ["AKILA_PRO", "AKILA_QUALIF", "AKILA_VALID", "AKILA_DEV"]; 
			var myinfra = myArray1[(Math.random() * myArray1.length) | 0];
						
			var myArray3 = ["Commerce", "Avant-vente", "RH", "Technique"]; 
			var mybusiness = myArray3[(Math.random() * myArray3.length) | 0];
	
			var myArray4 = ["Pierre", "Paul", "Jacques", "Jean", "Bechir"]; 
			var mycustomer = myArray4[(Math.random() * myArray4.length) | 0];
			
			var myArray5 = ["AKILA_v1", "AKILA_v2", "AKILA_v3 ", "AKILA_v4"]; 
			var myabtesting = myArray5[(Math.random() * myArray5.length) | 0];
			
			var myArray6 = ["Laptop_1", "Laptop_2", "Desktop_1", "Desktop_2"]; 
			var mycustomdim = myArray6[(Math.random() * myArray6.length) | 0];
			
			var myArray7 = ["AKILA-Nordics", "AKILA-Spain", "AKILA-France", "AKILA-Formation", "AKILA-Tunisia"]; 
			var mytracker = myArray7[(Math.random() * myArray7.length) | 0];
	
			var ekaraRumConf = { 
				debug: true,
				trackerUID: "65f6ce21-e760-4928-a6e6-a350d1fdff38", 
				// ekaraRumEndpoint : "https://go-ekararum.dev.ip-label.io",
				ekaraRumEndpoint:	"http://localhost",
				ekaraRumCustomDim: { 
					enabled: true,
					custom: mycustomdim,
					business: mybusiness,
					users: mycustomer,
					version: myabtesting,
					infrastructure: myinfra
				 }
				 
			}
			</script>