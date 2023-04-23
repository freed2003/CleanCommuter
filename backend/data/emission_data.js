const alt_emission_avgs = {
  "bicycling": 0,
  "walking": 0,
};

const emission_data = [
  {
    "": 0,
    "Make": "FIAT",
    "Model": "124 Spider",
    "MSRP": 27495,
    "CO2_avg": 186
  },
  {
    "": 1,
    "Make": "Chrysler",
    "Model": 200,
    "MSRP": 25170,
    "CO2_avg": 215.5
  },
  {
    "": 2,
    "Make": "Chrysler",
    "Model": 300,
    "MSRP": 37570,
    "CO2_avg": 254.9
  },
  {
    "": 3,
    "Make": "Nissan",
    "Model": "370Z",
    "MSRP": 46790,
    "CO2_avg": 264
  },
  {
    "": 4,
    "Make": "Mazda",
    "Model": 3,
    "MSRP": 25045,
    "CO2_avg": 81
  },
  {
    "": 5,
    "Make": "Alfa Romeo",
    "Model": "4C",
    "MSRP": 63900,
    "CO2_avg": 195
  },
  {
    "": 6,
    "Make": "FIAT",
    "Model": 500,
    "MSRP": 26595,
    "CO2_avg": 193.25
  },
  {
    "": 7,
    "Make": "FIAT",
    "Model": "500L",
    "MSRP": 19345,
    "CO2_avg": 210.6
  },
  {
    "": 8,
    "Make": "FIAT",
    "Model": "500X",
    "MSRP": 24635,
    "CO2_avg": 207.33333333333334
  },
  {
    "": 9,
    "Make": "Toyota",
    "Model": 86,
    "MSRP": 26255,
    "CO2_avg": 218
  },
  {
    "": 10,
    "Make": "Audi",
    "Model": "A3",
    "MSRP": 35150,
    "CO2_avg": 191.66666666666666
  },
  {
    "": 11,
    "Make": "Audi",
    "Model": "A4",
    "MSRP": 45000,
    "CO2_avg": 195.6
  },
  {
    "": 12,
    "Make": "Audi",
    "Model": "A8",
    "MSRP": 85200,
    "CO2_avg": 255.375
  },
  {
    "": 13,
    "Make": "GMC",
    "Model": "Acadia",
    "MSRP": 33975,
    "CO2_avg": 245
  },
  {
    "": 14,
    "Make": "Hyundai",
    "Model": "Accent",
    "MSRP": 17395,
    "CO2_avg": 168.25
  },
  {
    "": 15,
    "Make": "Honda",
    "Model": "Accord Hybrid",
    "MSRP": 31905,
    "CO2_avg": 117
  },
  {
    "": 16,
    "Make": "Honda",
    "Model": "Accord",
    "MSRP": 30775,
    "CO2_avg": 186.25
  },
  {
    "": 17,
    "Make": "Nissan",
    "Model": "Altima",
    "MSRP": 22560,
    "CO2_avg": 174
  },
  {
    "": 18,
    "Make": "Cadillac",
    "Model": "ATS-V",
    "MSRP": 62665,
    "CO2_avg": 290.3333333333333
  },
  {
    "": 19,
    "Make": "Cadillac",
    "Model": "ATS",
    "MSRP": 41340,
    "CO2_avg": 227.94736842105263
  },
  {
    "": 20,
    "Make": "Toyota",
    "Model": "Avalon",
    "MSRP": 37170,
    "CO2_avg": 220
  },
  {
    "": 21,
    "Make": "Volkswagen",
    "Model": "Beetle Convertible",
    "MSRP": 27295,
    "CO2_avg": 191
  },
  {
    "": 22,
    "Make": "Volkswagen",
    "Model": "Beetle",
    "MSRP": 25895,
    "CO2_avg": 191
  },
  {
    "": 23,
    "Make": "Porsche",
    "Model": "Boxster",
    "MSRP": 62100,
    "CO2_avg": 224
  },
  {
    "": 24,
    "Make": "Subaru",
    "Model": "BRZ",
    "MSRP": 29490,
    "CO2_avg": 212.21428571428572
  },
  {
    "": 25,
    "Make": "Kia",
    "Model": "Cadenza",
    "MSRP": 34900,
    "CO2_avg": 238
  },
  {
    "": 26,
    "Make": "Chevrolet",
    "Model": "Camaro",
    "MSRP": 29205,
    "CO2_avg": 244.875
  },
  {
    "": 27,
    "Make": "Toyota",
    "Model": "Camry",
    "MSRP": 26150,
    "CO2_avg": 187
  },
  {
    "": 28,
    "Make": "GMC",
    "Model": "Canyon",
    "MSRP": 29730,
    "CO2_avg": 263.2857142857143
  },
  {
    "": 29,
    "Make": "Porsche",
    "Model": "Cayenne",
    "MSRP": 74100,
    "CO2_avg": 267
  },
  {
    "": 30,
    "Make": "Porsche",
    "Model": "Cayman",
    "MSRP": 52600,
    "CO2_avg": 224
  },
  {
    "": 31,
    "Make": "Volkswagen",
    "Model": "CC",
    "MSRP": 34275,
    "CO2_avg": 220
  },
  {
    "": 32,
    "Make": "Dodge",
    "Model": "Challenger",
    "MSRP": 31995,
    "CO2_avg": 291.3333333333333
  },
  {
    "": 33,
    "Make": "Dodge",
    "Model": "Charger",
    "MSRP": 47995,
    "CO2_avg": 256.5
  },
  {
    "": 34,
    "Make": "Chevrolet",
    "Model": "Colorado",
    "MSRP": 29220,
    "CO2_avg": 263.2857142857143
  },
  {
    "": 35,
    "Make": "Bentley",
    "Model": "Continental GT",
    "MSRP": 177500,
    "CO2_avg": 327.5
  },
  {
    "": 36,
    "Make": "Toyota",
    "Model": "Corolla",
    "MSRP": 18965,
    "CO2_avg": 170.14285714285714
  },
  {
    "": 37,
    "Make": "Chevrolet",
    "Model": "Corvette",
    "MSRP": 68160,
    "CO2_avg": 291.6666666666667
  },
  {
    "": 38,
    "Make": "Honda",
    "Model": "CR-V",
    "MSRP": 26470,
    "CO2_avg": 185.28571428571428
  },
  {
    "": 39,
    "Make": "Honda",
    "Model": "CR-Z",
    "MSRP": 20645,
    "CO2_avg": 155.66666666666666
  },
  {
    "": 40,
    "Make": "Chevrolet",
    "Model": "Cruze",
    "MSRP": 16170,
    "CO2_avg": 172
  },
  {
    "": 41,
    "Make": "Lexus",
    "Model": "CT 200h",
    "MSRP": 32200,
    "CO2_avg": 131
  },
  {
    "": 42,
    "Make": "Cadillac",
    "Model": "CT6",
    "MSRP": 58395,
    "CO2_avg": 223
  },
  {
    "": 43,
    "Make": "Cadillac",
    "Model": "CTS-V",
    "MSRP": 63600,
    "CO2_avg": 331.75
  },
  {
    "": 44,
    "Make": "Cadillac",
    "Model": "CTS",
    "MSRP": 54970,
    "CO2_avg": 231.1
  },
  {
    "": 45,
    "Make": "Mazda",
    "Model": "CX-3",
    "MSRP": 19960,
    "CO2_avg": 181.57142857142858
  },
  {
    "": 46,
    "Make": "Mazda",
    "Model": "CX-5",
    "MSRP": 22795,
    "CO2_avg": 196.5
  },
  {
    "": 47,
    "Make": "Mazda",
    "Model": "CX-9",
    "MSRP": 31575,
    "CO2_avg": 248.2
  },
  {
    "": 48,
    "Make": "Rolls-Royce",
    "Model": "Dawn",
    "MSRP": 335000,
    "CO2_avg": 398.5
  },
  {
    "": 49,
    "Make": "Aston Martin",
    "Model": "DB9 GT",
    "MSRP": 235307,
    "CO2_avg": 365
  },
  {
    "": 50,
    "Make": "Aston Martin",
    "Model": "DB9",
    "MSRP": 200800,
    "CO2_avg": 359
  },
  {
    "": 51,
    "Make": "Land Rover",
    "Model": "Discovery Sport",
    "MSRP": 37070,
    "CO2_avg": 246
  },
  {
    "": 52,
    "Make": "Ford",
    "Model": "Edge",
    "MSRP": 30095,
    "CO2_avg": 226.5
  },
  {
    "": 53,
    "Make": "Hyundai",
    "Model": "Elantra GT",
    "MSRP": 19800,
    "CO2_avg": 207.375
  },
  {
    "": 54,
    "Make": "Hyundai",
    "Model": "Elantra",
    "MSRP": 22600,
    "CO2_avg": 190.75
  },
  {
    "": 55,
    "Make": "Buick",
    "Model": "Enclave",
    "MSRP": 49305,
    "CO2_avg": 263
  },
  {
    "": 56,
    "Make": "Buick",
    "Model": "Encore",
    "MSRP": 29450,
    "CO2_avg": 204
  },
  {
    "": 57,
    "Make": "Chevrolet",
    "Model": "Equinox",
    "MSRP": 26270,
    "CO2_avg": 197
  },
  {
    "": 58,
    "Make": "Lexus",
    "Model": "ES 300h",
    "MSRP": 40580,
    "CO2_avg": 134.14285714285714
  },
  {
    "": 59,
    "Make": "Lexus",
    "Model": "ES 350",
    "MSRP": 37700,
    "CO2_avg": 220.42857142857142
  },
  {
    "": 60,
    "Make": "Ford",
    "Model": "Escape",
    "MSRP": 29735,
    "CO2_avg": 199.5
  },
  {
    "": 61,
    "Make": "Ford",
    "Model": "F-150",
    "MSRP": 45090,
    "CO2_avg": 273.25
  },
  {
    "": 62,
    "Make": "Ford",
    "Model": "Fiesta",
    "MSRP": 18405,
    "CO2_avg": 181
  },
  {
    "": 63,
    "Make": "Honda",
    "Model": "Fit",
    "MSRP": 15650,
    "CO2_avg": 163.66666666666666
  },
  {
    "": 64,
    "Make": "Ford",
    "Model": "Flex",
    "MSRP": 32100,
    "CO2_avg": 298
  },
  {
    "": 65,
    "Make": "Bentley",
    "Model": "Flying Spur",
    "MSRP": 200500,
    "CO2_avg": 373
  },
  {
    "": 66,
    "Make": "Kia",
    "Model": "Forte",
    "MSRP": 19590,
    "CO2_avg": 174.6
  },
  {
    "": 67,
    "Make": "Scion",
    "Model": "FR-S",
    "MSRP": 24700,
    "CO2_avg": 207.66666666666666
  },
  {
    "": 68,
    "Make": "Nissan",
    "Model": "Frontier",
    "MSRP": 32560,
    "CO2_avg": 287.3333333333333
  },
  {
    "": 69,
    "Make": "Ford",
    "Model": "Fusion Hybrid",
    "MSRP": 27380,
    "CO2_avg": 131
  },
  {
    "": 70,
    "Make": "Ford",
    "Model": "Fusion",
    "MSRP": 27830,
    "CO2_avg": 203.5
  },
  {
    "": 71,
    "Make": "Maserati",
    "Model": "Ghibli",
    "MSRP": 77900,
    "CO2_avg": 286
  },
  {
    "": 72,
    "Make": "Rolls-Royce",
    "Model": "Ghost",
    "MSRP": 263200,
    "CO2_avg": 398.5
  },
  {
    "": 73,
    "Make": "Volkswagen",
    "Model": "Golf Alltrack",
    "MSRP": 26950,
    "CO2_avg": 222.5
  },
  {
    "": 74,
    "Make": "Volkswagen",
    "Model": "Golf GTI",
    "MSRP": 29280,
    "CO2_avg": 202.75
  },
  {
    "": 75,
    "Make": "Volkswagen",
    "Model": "Golf R",
    "MSRP": 39090,
    "CO2_avg": 222.5
  },
  {
    "": 76,
    "Make": "Volkswagen",
    "Model": "Golf SportWagen",
    "MSRP": 31445,
    "CO2_avg": 175
  },
  {
    "": 77,
    "Make": "Volkswagen",
    "Model": "Golf",
    "MSRP": 26995,
    "CO2_avg": 173.75
  },
  {
    "": 78,
    "Make": "Dodge",
    "Model": "Grand Caravan",
    "MSRP": 30995,
    "CO2_avg": 276
  },
  {
    "": 79,
    "Make": "Maserati",
    "Model": "GranTurismo Convertible",
    "MSRP": 143300,
    "CO2_avg": 354
  },
  {
    "": 80,
    "Make": "Lexus",
    "Model": "GS 200t",
    "MSRP": 53285,
    "CO2_avg": 212
  },
  {
    "": 81,
    "Make": "Lexus",
    "Model": "GS 350",
    "MSRP": 55070,
    "CO2_avg": 240
  },
  {
    "": 82,
    "Make": "Lexus",
    "Model": "GS 450h",
    "MSRP": 60430,
    "CO2_avg": 175.2
  },
  {
    "": 83,
    "Make": "Lexus",
    "Model": "GS F",
    "MSRP": 84440,
    "CO2_avg": 293
  },
  {
    "": 84,
    "Make": "Nissan",
    "Model": "GT-R",
    "MSRP": 111510,
    "CO2_avg": 296.57142857142856
  },
  {
    "": 85,
    "Make": "Lexus",
    "Model": "GX 460",
    "MSRP": 49485,
    "CO2_avg": 331.7142857142857
  },
  {
    "": 86,
    "Make": "Toyota",
    "Model": "Highlander",
    "MSRP": 34750,
    "CO2_avg": 241.5
  },
  {
    "": 87,
    "Make": "Honda",
    "Model": "HR-V",
    "MSRP": 22065,
    "CO2_avg": 183.54545454545453
  },
  {
    "": 88,
    "Make": "Acura",
    "Model": "ILX",
    "MSRP": 29350,
    "CO2_avg": 199.22222222222223
  },
  {
    "": 89,
    "Make": "Chevrolet",
    "Model": "Impala",
    "MSRP": 34465,
    "CO2_avg": 245
  },
  {
    "": 90,
    "Make": "Scion",
    "Model": "iM",
    "MSRP": 18460,
    "CO2_avg": 176.5
  },
  {
    "": 91,
    "Make": "Scion",
    "Model": "iQ",
    "MSRP": 17850,
    "CO2_avg": 145
  },
  {
    "": 92,
    "Make": "Lexus",
    "Model": "IS 200t",
    "MSRP": 37325,
    "CO2_avg": 213
  },
  {
    "": 93,
    "Make": "Lexus",
    "Model": "IS 250 C",
    "MSRP": 42860,
    "CO2_avg": 222
  },
  {
    "": 94,
    "Make": "Lexus",
    "Model": "IS 250",
    "MSRP": 36100,
    "CO2_avg": 222
  },
  {
    "": 95,
    "Make": "Lexus",
    "Model": "IS 300",
    "MSRP": 39700,
    "CO2_avg": 218
  },
  {
    "": 96,
    "Make": "Lexus",
    "Model": "IS 350 C",
    "MSRP": 47140,
    "CO2_avg": 244
  },
  {
    "": 97,
    "Make": "Lexus",
    "Model": "IS 350",
    "MSRP": 39615,
    "CO2_avg": 244.66666666666666
  },
  {
    "": 98,
    "Make": "Lexus",
    "Model": "IS F",
    "MSRP": 63600,
    "CO2_avg": 290
  },
  {
    "": 99,
    "Make": "Volkswagen",
    "Model": "Jetta GLI",
    "MSRP": 24535,
    "CO2_avg": 197.5
  },
  {
    "": 100,
    "Make": "Volkswagen",
    "Model": "Jetta",
    "MSRP": 22325,
    "CO2_avg": 162.5
  },
  {
    "": 101,
    "Make": "Dodge",
    "Model": "Journey",
    "MSRP": 33295,
    "CO2_avg": 261
  },
  {
    "": 102,
    "Make": "Kia",
    "Model": "K900",
    "MSRP": 59900,
    "CO2_avg": 294.25
  },
  {
    "": 103,
    "Make": "Buick",
    "Model": "LaCrosse",
    "MSRP": 35725,
    "CO2_avg": 233
  },
  {
    "": 104,
    "Make": "Maserati",
    "Model": "Levante",
    "MSRP": 83000,
    "CO2_avg": 324
  },
  {
    "": 105,
    "Make": "Land Rover",
    "Model": "LR2",
    "MSRP": 36600,
    "CO2_avg": 274
  },
  {
    "": 106,
    "Make": "Land Rover",
    "Model": "LR4",
    "MSRP": 49700,
    "CO2_avg": 333
  },
  {
    "": 107,
    "Make": "Lexus",
    "Model": "LS 460",
    "MSRP": 82305,
    "CO2_avg": 284
  },
  {
    "": 108,
    "Make": "Lexus",
    "Model": "LS 600h L",
    "MSRP": 120060,
    "CO2_avg": 264.6666666666667
  },
  {
    "": 109,
    "Make": "Lexus",
    "Model": "LX 570",
    "MSRP": 83180,
    "CO2_avg": 377.42857142857144
  },
  {
    "": 110,
    "Make": "BMW",
    "Model": "M2",
    "MSRP": 51700,
    "CO2_avg": 254.66666666666666
  },
  {
    "": 111,
    "Make": "BMW",
    "Model": "M3",
    "MSRP": 62000,
    "CO2_avg": 277.5
  },
  {
    "": 112,
    "Make": "BMW",
    "Model": "M5",
    "MSRP": 92900,
    "CO2_avg": 328.8
  },
  {
    "": 113,
    "Make": "BMW",
    "Model": "M6 Gran Coupe",
    "MSRP": 115700,
    "CO2_avg": 344
  },
  {
    "": 114,
    "Make": "BMW",
    "Model": "M6",
    "MSRP": 118200,
    "CO2_avg": 331.1666666666667
  },
  {
    "": 115,
    "Make": "Porsche",
    "Model": "Macan",
    "MSRP": 72300,
    "CO2_avg": 264
  },
  {
    "": 116,
    "Make": "Chevrolet",
    "Model": "Malibu",
    "MSRP": 28195,
    "CO2_avg": 197.75
  },
  {
    "": 117,
    "Make": "Nissan",
    "Model": "Maxima",
    "MSRP": 34380,
    "CO2_avg": 233
  },
  {
    "": 118,
    "Make": "Mitsubishi",
    "Model": "Mirage G4",
    "MSRP": 13995,
    "CO2_avg": 150.5
  },
  {
    "": 119,
    "Make": "Mitsubishi",
    "Model": "Mirage",
    "MSRP": 12995,
    "CO2_avg": 147
  },
  {
    "": 120,
    "Make": "Lincoln",
    "Model": "MKZ",
    "MSRP": 45555,
    "CO2_avg": 228.83333333333334
  },
  {
    "": 121,
    "Make": "Bentley",
    "Model": "Mulsanne",
    "MSRP": 298900,
    "CO2_avg": 465
  },
  {
    "": 122,
    "Make": "Nissan",
    "Model": "Murano",
    "MSRP": 39000,
    "CO2_avg": 240
  },
  {
    "": 123,
    "Make": "Ford",
    "Model": "Mustang",
    "MSRP": 41800,
    "CO2_avg": 262
  },
  {
    "": 124,
    "Make": "Acura",
    "Model": "NSX",
    "MSRP": 156000,
    "CO2_avg": 261
  },
  {
    "": 125,
    "Make": "Honda",
    "Model": "Odyssey",
    "MSRP": 37775,
    "CO2_avg": 250
  },
  {
    "": 126,
    "Make": "Kia",
    "Model": "Optima Hybrid",
    "MSRP": 32150,
    "CO2_avg": 132.5
  },
  {
    "": 127,
    "Make": "Kia",
    "Model": "Optima",
    "MSRP": 25995,
    "CO2_avg": 209.33333333333334
  },
  {
    "": 128,
    "Make": "Chrysler",
    "Model": "Pacifica",
    "MSRP": 42495,
    "CO2_avg": 259
  },
  {
    "": 129,
    "Make": "Porsche",
    "Model": "Panamera",
    "MSRP": 200500,
    "CO2_avg": 250
  },
  {
    "": 130,
    "Make": "Volkswagen",
    "Model": "Passat",
    "MSRP": 26280,
    "CO2_avg": 196.5
  },
  {
    "": 131,
    "Make": "Nissan",
    "Model": "Pathfinder",
    "MSRP": 29510,
    "CO2_avg": 240
  },
  {
    "": 132,
    "Make": "Rolls-Royce",
    "Model": "Phantom",
    "MSRP": 402940,
    "CO2_avg": 382
  },
  {
    "": 133,
    "Make": "Honda",
    "Model": "Pilot",
    "MSRP": 33720,
    "CO2_avg": 250
  },
  {
    "": 134,
    "Make": "Toyota",
    "Model": "Prius c",
    "MSRP": 20030,
    "CO2_avg": 120
  },
  {
    "": 135,
    "Make": "Toyota",
    "Model": "Prius",
    "MSRP": 25765,
    "CO2_avg": 105.5
  },
  {
    "": 136,
    "Make": "Audi",
    "Model": "Q3",
    "MSRP": 32500,
    "CO2_avg": 239.5
  },
  {
    "": 137,
    "Make": "Infiniti",
    "Model": "Q50",
    "MSRP": 38950,
    "CO2_avg": 232
  },
  {
    "": 138,
    "Make": "Audi",
    "Model": "Q5",
    "MSRP": 52900,
    "CO2_avg": 243.66666666666666
  },
  {
    "": 139,
    "Make": "Infiniti",
    "Model": "Q70",
    "MSRP": 51750,
    "CO2_avg": 268.5
  },
  {
    "": 140,
    "Make": "Audi",
    "Model": "Q7",
    "MSRP": 64900,
    "CO2_avg": 272.77777777777777
  },
  {
    "": 141,
    "Make": "Infiniti",
    "Model": "QX60",
    "MSRP": 45400,
    "CO2_avg": 241
  },
  {
    "": 142,
    "Make": "Audi",
    "Model": "R8",
    "MSRP": 164700,
    "CO2_avg": 356.6
  },
  {
    "": 143,
    "Make": "Land Rover",
    "Model": "Range Rover Evoque",
    "MSRP": 60000,
    "CO2_avg": 225
  },
  {
    "": 144,
    "Make": "Toyota",
    "Model": "RAV4",
    "MSRP": 25240,
    "CO2_avg": 201
  },
  {
    "": 145,
    "Make": "Lexus",
    "Model": "RC 200t",
    "MSRP": 39995,
    "CO2_avg": 214
  },
  {
    "": 146,
    "Make": "Lexus",
    "Model": "RC 350",
    "MSRP": 42790,
    "CO2_avg": 245
  },
  {
    "": 147,
    "Make": "Lexus",
    "Model": "RC F",
    "MSRP": 62400,
    "CO2_avg": 288.5
  },
  {
    "": 148,
    "Make": "Buick",
    "Model": "Regal",
    "MSRP": 28565,
    "CO2_avg": 212.5
  },
  {
    "": 149,
    "Make": "Kia",
    "Model": "Rio",
    "MSRP": 15190,
    "CO2_avg": 167.5
  },
  {
    "": 150,
    "Make": "Acura",
    "Model": "RLX",
    "MSRP": 50950,
    "CO2_avg": 231.66666666666666
  },
  {
    "": 151,
    "Make": "Nissan",
    "Model": "Rogue",
    "MSRP": 24140,
    "CO2_avg": 192
  },
  {
    "": 152,
    "Make": "Audi",
    "Model": "RS 5",
    "MSRP": 69600,
    "CO2_avg": 286.6666666666667
  },
  {
    "": 153,
    "Make": "Audi",
    "Model": "RS 7",
    "MSRP": 106500,
    "CO2_avg": 308.25
  },
  {
    "": 154,
    "Make": "Audi",
    "Model": "S3",
    "MSRP": 41100,
    "CO2_avg": 221.2
  },
  {
    "": 155,
    "Make": "Audi",
    "Model": "S4",
    "MSRP": 49500,
    "CO2_avg": 253.71428571428572
  },
  {
    "": 156,
    "Make": "Audi",
    "Model": "S5",
    "MSRP": 67350,
    "CO2_avg": 256.44444444444446
  },
  {
    "": 157,
    "Make": "Volvo",
    "Model": "S60",
    "MSRP": 35450,
    "CO2_avg": 223
  },
  {
    "": 158,
    "Make": "Audi",
    "Model": "S6",
    "MSRP": 75500,
    "CO2_avg": 273.2
  },
  {
    "": 159,
    "Make": "Audi",
    "Model": "S7",
    "MSRP": 82500,
    "CO2_avg": 273.6
  },
  {
    "": 160,
    "Make": "Volvo",
    "Model": "S80",
    "MSRP": 39900,
    "CO2_avg": 235
  },
  {
    "": 161,
    "Make": "Audi",
    "Model": "S8",
    "MSRP": 114900,
    "CO2_avg": 309
  },
  {
    "": 162,
    "Make": "Hyundai",
    "Model": "Santa Fe",
    "MSRP": 30150,
    "CO2_avg": 225
  },
  {
    "": 163,
    "Make": "Kia",
    "Model": "Sedona",
    "MSRP": 36300,
    "CO2_avg": 271.5
  },
  {
    "": 164,
    "Make": "Nissan",
    "Model": "Sentra",
    "MSRP": 20720,
    "CO2_avg": 177.5
  },
  {
    "": 165,
    "Make": "Toyota",
    "Model": "Sienna",
    "MSRP": 42880,
    "CO2_avg": 256.5
  },
  {
    "": 166,
    "Make": "Hyundai",
    "Model": "Sonata Hybrid",
    "MSRP": 26000,
    "CO2_avg": 126
  },
  {
    "": 167,
    "Make": "Hyundai",
    "Model": "Sonata",
    "MSRP": 23175,
    "CO2_avg": 193.25
  },
  {
    "": 168,
    "Make": "Kia",
    "Model": "Sorento",
    "MSRP": 38500,
    "CO2_avg": 225
  },
  {
    "": 169,
    "Make": "Kia",
    "Model": "Soul",
    "MSRP": 16900,
    "CO2_avg": 199.4
  },
  {
    "": 170,
    "Make": "Chevrolet",
    "Model": "Spark",
    "MSRP": 14040,
    "CO2_avg": 168.5
  },
  {
    "": 171,
    "Make": "Kia",
    "Model": "Sportage",
    "MSRP": 21900,
    "CO2_avg": 216
  },
  {
    "": 172,
    "Make": "Audi",
    "Model": "SQ5",
    "MSRP": 52700,
    "CO2_avg": 279
  },
  {
    "": 173,
    "Make": "Cadillac",
    "Model": "SRX",
    "MSRP": 48065,
    "CO2_avg": 284.3333333333333
  },
  {
    "": 174,
    "Make": "Chevrolet",
    "Model": "Suburban",
    "MSRP": 54205,
    "CO2_avg": 314
  },
  {
    "": 175,
    "Make": "Toyota",
    "Model": "Tacoma",
    "MSRP": 27355,
    "CO2_avg": 263
  },
  {
    "": 176,
    "Make": "Chevrolet",
    "Model": "Tahoe",
    "MSRP": 54505,
    "CO2_avg": 314
  },
  {
    "": 177,
    "Make": "Scion",
    "Model": "tC",
    "MSRP": 21400,
    "CO2_avg": 208.16666666666666
  },
  {
    "": 178,
    "Make": "GMC",
    "Model": "Terrain",
    "MSRP": 24070,
    "CO2_avg": 200.66666666666666
  },
  {
    "": 179,
    "Make": "Volkswagen",
    "Model": "Tiguan",
    "MSRP": 30225,
    "CO2_avg": 221
  },
  {
    "": 180,
    "Make": "Nissan",
    "Model": "Titan",
    "MSRP": 39780,
    "CO2_avg": 312
  },
  {
    "": 181,
    "Make": "Acura",
    "Model": "TL",
    "MSRP": 37530,
    "CO2_avg": 232
  },
  {
    "": 182,
    "Make": "Acura",
    "Model": "TLX",
    "MSRP": 41575,
    "CO2_avg": 201
  },
  {
    "": 183,
    "Make": "Chevrolet",
    "Model": "Traverse",
    "MSRP": 43935,
    "CO2_avg": 261
  },
  {
    "": 184,
    "Make": "Chevrolet",
    "Model": "Trax",
    "MSRP": 25030,
    "CO2_avg": 195.33333333333334
  },
  {
    "": 185,
    "Make": "Acura",
    "Model": "TSX",
    "MSRP": 31635,
    "CO2_avg": 225.33333333333334
  },
  {
    "": 186,
    "Make": "Hyundai",
    "Model": "Tucson",
    "MSRP": 26450,
    "CO2_avg": 216
  },
  {
    "": 187,
    "Make": "Toyota",
    "Model": "Tundra",
    "MSRP": 33210,
    "CO2_avg": 371
  },
  {
    "": 188,
    "Make": "Hyundai",
    "Model": "Veloster",
    "MSRP": 23300,
    "CO2_avg": 194.66666666666666
  },
  {
    "": 189,
    "Make": "Nissan",
    "Model": "Versa",
    "MSRP": 13990,
    "CO2_avg": 170.75
  },
  {
    "": 190,
    "Make": "Rolls-Royce",
    "Model": "Wraith",
    "MSRP": 284900,
    "CO2_avg": 387.5
  },
  {
    "": 191,
    "Make": "Subaru",
    "Model": "WRX",
    "MSRP": 37395,
    "CO2_avg": 255.5
  },
  {
    "": 192,
    "Make": "BMW",
    "Model": "X5 M",
    "MSRP": 98700,
    "CO2_avg": 340.25
  },
  {
    "": 193,
    "Make": "BMW",
    "Model": "X6 M",
    "MSRP": 102100,
    "CO2_avg": 345.3333333333333
  },
  {
    "": 194,
    "Make": "Scion",
    "Model": "xB",
    "MSRP": 16970,
    "CO2_avg": 226.5
  },
  {
    "": 195,
    "Make": "Volvo",
    "Model": "XC60",
    "MSRP": 51050,
    "CO2_avg": 258
  },
  {
    "": 196,
    "Make": "Scion",
    "Model": "xD",
    "MSRP": 15920,
    "CO2_avg": 183
  },
  {
    "": 197,
    "Make": "Cadillac",
    "Model": "XT5",
    "MSRP": 62500,
    "CO2_avg": 243
  },
  {
    "": 198,
    "Make": "Cadillac",
    "Model": "XTS",
    "MSRP": 64245,
    "CO2_avg": 260.6666666666667
  },
  {
    "": 199,
    "Make": "Toyota",
    "Model": "Yaris",
    "MSRP": 16820,
    "CO2_avg": 155
  },
  {
    "": 200,
    "Make": "GMC",
    "Model": "Yukon XL",
    "MSRP": 61925,
    "CO2_avg": 314
  },
  {
    "": 201,
    "Make": "GMC",
    "Model": "Yukon",
    "MSRP": 50740,
    "CO2_avg": 314
  },
  {
    "": 202,
    "Make": "Tesla",
    "Model": "Model X",
    "MSRP": 94990,
    "CO2_avg": 99
  },
  {
    "": 203,
    "Make": "Tesla",
    "Model": "Model Y",
    "MSRP": 52990,
    "CO2_avg": 87
  },
  {
    "": 204,
    "Make": "Tesla",
    "Model": "Model S",
    "MSRP": 84990,
    "CO2_avg": 93
  },
  {
    "": 205,
    "Make": "Tesla",
    "Model": 'Model 3',
    "MSRP": 41990,
    "CO2_avg": 81
  }
]

module.exports = { alt_emission_avgs, emission_data};