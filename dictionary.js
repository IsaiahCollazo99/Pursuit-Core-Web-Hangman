let allTheWords = ["able", "about", "account", "acid", "across", "addition", "adjustment", "advertisement", "after", "again", "against", "agreement", "almost", 
"among", "amount", "amusement", "angle", "angry", "animal", "answer", "apparatus", "apple", "approval", "arch", "argument", "army", "attack", "attempt", 
"attention", "attraction", "authority", "automatic", "awake", "baby", "back", "balance", "ball", "band", "base", "basin", "basket", "bath", "beautiful", 
"because", "before", "behaviour", "belief", "bell", "bent", "berry", "between", "bird", "birth", "bite", "bitter", "black", "blade", "blood", "blow", "blue", 
"board", "boat", "body", "boiling", "bone", "book", "boot", "bottle", "brain", "brake", "branch", "brass", "bread", "breath", "brick", "bridge", "bright", 
"broken", "brother", "brown", "brush", "bucket", "building", "bulb", "burn", "burst", "business", "butter", "button", "cake", "camera", "canvas", "card", 
"care", "carriage", "cart", "cause", "certain", "chain", "chalk", "chance", "change", "cheap", "cheese", "chemical", "chest", "chief", "chin", "church", "circle", 
"clean", "clear", "clock", "cloth", "cloud", "coal", "coat", "cold", "collar", "colour", "comb", "come", "comfort", "committee", "common", "company", "comparison", 
"competition", "complete", "complex", "condition", "connection", "conscious", "control", "cook", "copper", "copy", "cord", "cork", "cotton", "cough", "country", 
"cover", "crack", "credit", "crime", "cruel", "crush", "current", "curtain", "curve", "cushion", "damage", "danger", "dark", "daughter", "dead", "dear", "death", 
"debt", "decision", "deep", "degree", "delicate", "dependent", "design", "desire", "destruction", "detail", "development", "different", "digestion", "direction", 
"dirty", "discovery", "discussion", "disease", "disgust", "distance", "distribution", "division", "door", "doubt", "down", "drain", "drawer", "dress", "drink", 
"driving", "drop", "dust", "early", "earth", "east", "edge", "education", "effect", "elastic", "electric", "engine", "enough", "equal", "error", "even", "event", 
"ever", "every", "example", "exchange", "existence", "expansion", "experience", "expert", "face", "fact", "fall", "false", "family", "farm", "father", "fear", 
"feather", "feeble", "feeling", "female", "fertile", "fiction", "field", "fight", "finger", "fire", "first", "fish", "fixed", "flag", "flame", "flat", "flight", 
"floor", "flower", "fold", "food", "foolish", "foot", "force", "fork", "form", "forward", "fowl", "frame", "free", "frequent", "friend", "from", "front", "fruit", 
"full", "future", "garden", "general", "girl", "give", "glass", "glove", "goat", "gold", "good", "government", "grain", "grass", "great", "green", "grey", "grip", 
"group", "growth", "guide", "hair", "hammer", "hand", "hanging", "happy", "harbour", "hard", "harmony", "hate", "have", "head", "healthy", "hear", "hearing", 
"heart", "heat", "help", "high", "history", "hole", "hollow", "hook", "hope", "horn", "horse", "hospital", "hour", "house", "humour", "idea", "important", 
"impulse", "increase", "industry", "insect", "instrument", "insurance", "interest", "invention", "iron", "island", "jelly", "jewel", "join", "journey", "judge", 
"jump", "keep", "kettle", "kick", "kind", "kiss", "knee", "knife", "knot", "knowledge", "land", "language", "last", "late", "laugh", "lead", "leaf", "learning", 
"leather", "left", "letter", "level", "library", "lift", "light", "like", "limit", "line", "linen", "liquid", "list", "little", "living", "lock", "long", "look", 
"loose", "loss", "loud", "love", "machine", "make", "male", "manager", "mark", "market", "married", "mass", "match", "material", "meal", "measure", "meat", 
"medical", "meeting", "memory", "metal", "middle", "military", "milk", "mind", "mine", "minute", "mist", "mixed", "money", "monkey", "month", "moon", "morning", 
"mother", "motion", "mountain", "mouth", "move", "much", "muscle", "music", "nail", "name", "narrow", "nation", "natural", "near", "necessary", "neck", "need", 
"needle", "nerve", "news", "night", "noise", "normal", "north", "nose", "note", "number", "observation", "offer", "office", "only", "open", "operation", "opinion", 
"opposite", "orange", "order", "organization", "ornament", "other", "oven", "over", "owner", "page", "pain", "paint", "paper", "parallel", "parcel", "part", 
"past", "paste", "payment", "peace", "pencil", "person", "physical", "picture", "pipe", "place", "plane", "plant", "plate", "play", "please", "pleasure", 
"plough", "pocket", "point", "poison", "polish", "political", "poor", "porter", "position", "possible", "potato", "powder", "power", "present", "price", "print", 
"prison", "private", "probable", "process", "produce", "profit", "property", "prose", "protest", "public", "pull", "pump", "punishment", "purpose", "push", 
"quality", "question", "quick", "quiet", "quite", "rail", "rain", "range", "rate", "reaction", "reading", "ready", "reason", "receipt", "record", "regret", 
"regular", "relation", "religion", "representative", "request", "respect", "responsible", "rest", "reward", "rhythm", "rice", "right", "ring", "river", "road", 
"roll", "roof", "room", "root", "rough", "round", "rule", "safe", "sail", "salt", "same", "sand", "scale", "school", "science", "scissors", "screw", "seat", 
"second", "secret", "secretary", "seed", "seem", "selection", "self", "send", "sense", "separate", "serious", "servant", "shade", "shake", "shame", "sharp", 
"sheep", "shelf", "ship", "shirt", "shock", "shoe", "short", "shut", "side", "sign", "silk", "silver", "simple", "sister", "size", "skin", "skirt", "sleep", 
"slip", "slope", "slow", "small", "smash", "smell", "smile", "smoke", "smooth", "snake", "sneeze", "snow", "soap", "society", "sock", "soft", "solid", "some", 
"song", "sort", "sound", "soup", "south", "space", "spade", "special", "sponge", "spoon", "spring", "square", "stage", "stamp", "star", "start", "statement", 
"station", "steam", "steel", "stem", "step", "stick", "sticky", "stiff", "still", "stitch", "stocking", "stomach", "stone", "stop", "store", "story", "straight", 
"strange", "street", "stretch", "strong", "structure", "substance", "such", "sudden", "sugar", "suggestion", "summer", "support", "surprise", "sweet", "swim", 
"system", "table", "tail", "take", "talk", "tall", "taste", "teaching", "tendency", "test", "than", "that", "then", "theory", "there", "thick", "thin", "thing", 
"this", "thought", "thread", "throat", "through", "through", "thumb", "thunder", "ticket", "tight", "till", "time", "tired", "together", "tomorrow", "tongue", 
"tooth", "touch", "town", "trade", "train", "transport", "tray", "tree", "trick", "trouble", "trousers", "true", "turn", "twist", "umbrella", "under", "unit", 
"value", "verse", "very", "vessel", "view", "violent", "voice", "waiting", "walk", "wall", "warm", "wash", "waste", "watch", "water", "wave", "weather", "week", 
"weight", "well", "west", "wheel", "when", "where", "while", "whip", "whistle", "white", "wide", "will", "wind", "window", "wine", "wing", "winter", "wire", 
"wise", "with", "woman", "wood", "wool", "word", "work", "worm", "wound", "writing", "wrong", "year", "yellow", "yesterday", "young"];

let allTheMovies = ["la la land", "whiplash", "lord of the rings", "jaws", "alien", "godfather", "the dark knight", "star wars", 
"pulp fiction", "inglorious bastards", "et", "forrest gump", "casablanca", "jurassic park", "titanic", "back to the future", 
"the shawshank redemption", "psycho", "schindlers list", "the matrix", "goodfellas", "the departed", "silence of the lambs", 
"rocky", "avatar", "the wixard of oz", "fight club", "the exorcist", "inception", "the avengers", "snow white", "cinderella", 
"moana", "coco", "toy story", "aladdin", "mulan", "booksmart", "lion king", "die hard", "scott pilgrim vs the world", "baby driver", 
"infinity war", "spiderman", "iron man", "hulk", "captain america", "thor", "captain marvel", "guardians of the galaxy", "deadpool", 
"xmen", "fantastic four", "the spongebob movie", "click", "the waterboy", "benchwarmers", "black panther", "doctor strange", "the room",
"pirates of the carribean", "willy wonka and the chocolate factory", "a bronx tale", "fury", "creed", "harry potter", 
"fast and furious", "beauty and the beast", "frozen", "the incredibles", "aquaman", "wonder woman", "finding nemo", "ice age",
"venom", "the twilight saga", "shrek", "mission impossible", "the chronicles of narnia", "up", "independence day", "transformers",
"suicide squad", "alice in wonderland", "zootopia", "the passion of christ", "grease", "hair", "the greatest showman", "mary poppins",
"ghostbusters", "home alone", "bambi", "west side story", "the breakfast club", "men in black", "twister", "godzilla", "king kong",
"peter pan", "the jungle book", "rambo", "beverly hills cop", "saving private ryan", "how the grinch stole christmas", "rush hour",
"pokemon the first movie", "the polar express", "dumb and dumber", "ace venture pet detective", "liar liar", "horrible bosses", 
"the hangover", "bridesmaids", "bruce almighty", "austin powers", "taken", "dirty dancing", "magic mike", "happy feet",
"marley and me", "the blair witch project", "the ring", "i am legend", "halloween", "saw", "world war z", "borat",
"straight out of compton", "sin city", "space jam", "who framed roger rabbit", "hot rod", "blades of glory", "kicking and screaming", 
"surfs up", "blade runner", "the great gatsby", "the revenant", "the notebook", "the never ending story", "the outsiders",
"the shining", "stand by me"];

let allTheShows = ["game of thrones", "the wire", "breaking bad", "the sopranos", "the simpsons", "family guy", "seinfeld", 
"friends", "the office", "parks and recreation", "mad men", "cheers", "arrested development", "saturday night live", 
"the walking dead", "the big bang theory", "mash", "south park", "curb your enthusiam", "portlandia", "the x files", "i love lucy", 
"buffy the vampire slayer", "twin peaks", "the twilight zone", "black mirror", "stranger things", "on my block", "daredevil", 
"luke cage", "modern family", "frasier", "the middle", "doctor who", "orange is the new black", "freaks and geeks", "dexter", 
"bojack horseman", "sex and the city", "spongebob", "victorious", "icarly", "ren and stimpy", "beavis and butthead", "robot chicken",
"pokemon", "digimon", "yugioh", "naruto", "one piece", "bleach", "dragon ball z", "the fresh prince of bel air",
"malcolm in the middle", "law and order", "lost", "chappelles show", "downtown abbey", "american horror story", "the jetsons",
"the flinstones", "scooby doo", "house of cards", "homeland", "key and peele", "the golden girls", "prison break", "atlanta", 
"true detective", "archer", "avatar the last airbender", "frasier", "boardwalk empire", "rick and morty", "hannibal", "er", 
"greys anatomy", "survivor", "the andy griffith show", "the honeymooners", "the muppet show", "cowboy bebop", "in living color",
"all that", "mister rogers neighborhood", "blues clues", "teletubbies", "dora the explorer", "star trek", "futurama",
"band of brothers", "sesame street", "everybody loves raymond", "everybody hates chris", "home improvement"]

let allTheMusicians = ["eminem", "guns n roses", "kyle", "michael jackson", "elvis presley", "madonna", "lady gaga", "elton john", 
"drake", "lil wayne", "billy joel", "bruce springsteen", "taylow swift", "selena gomez", "mariah carey", "whitney houston", "prince", 
"beyonce", "stevie wonder", "david bowie", "britney spears", "paul mccartney", "the beatles", "jayz", "rihanna", "ed sheeran", 
"kanye west", "celine dion", "justin bieber", "tupac", "biggie smalls", "adele", "frank sinatra", "jimi hendrix", "katy perry", 
"foo fighters", "nirvana", "pink", "my chemical romance", "john lennon", "james brown", "ozzy osbourne", "bruno mars", 
"carlos santana", "bad bunny", "fall out boy", "brockhampton", "xxxtentacion", "anderson paak", "j cole", "justin timberlake", 
"nsync", "boys n the hood", "boyz ii men", "one direction", "harry styles", "nial horan", "louis tomlinson", "zayn malik", 
"liam payne", "a boogie wit da hoodie", "red hot chili peppers", "rush", "system of a down", "jennifer lopez", "skrillex", 
"dua lipa", "kehlani", "logic", "joji", "rich brian", "nicki minaj", "asap rocky", "asap ferg", "schoolboy q", "kendrick lamar",
"tyler the creator", "t pain", "frank ocean", "all time low", "the all american rejects", "amine", "miguel", "talib kweli", 
"backstreet boys", "nwa", "jid", "joey badass", "big pun", "bill withers", "billie eilish", "chance the rapper", "childish gambino",
"ciara", "missy elliot", "the doors", "earth wind and fire", "green day", "jaden smith", "jonas brothers", "khalid", "wiz khalifa",
"linkin park", "marshmello", "mac miller", "marc anthony", "pharell williams", "nelly", "neyo", "panic at the disco", "paramore",
"playboi carti", "post malone", "queen", "radiohead", "shawn mendes", "travis scott", "usher", "weezer", "young thug"]

let allTheBooks = ["hunger games", "to kill a mocking bird", "the adventures of tom sawyer", "moby dick", "romeo and juliet", 
"gone with the wind", "the da vinci code", "it", "a tale of two cities", "harry potter", "the very hungry caterpillar", 
"fifty shades of grey", "the handmaids tale", "dune", "and then there were none", "lord of the flies", "the great gatsby",
"the fault in our stars", "animal farm", "pride and prejudice", "where the wild things are", "the power of positive thinking",
"the outsiders", "the grapes of wrath", "the hitchikers guide to the galaxy", "a wrinkle in time", "the cat in the hat", 
"the giver", "nancy drew", "diary of a wimpy kid", "the chronicles of narnia", "twilight", "a song of ice and fire", 
"captain underpants", "a series of unfortunate events", "the dark tower", "carrie", "the shining", "macbeth",
"the catcher in the rye", "of mice and men", "hamlet", "the adventures of huckleberry finn", "the odyssey", "jane eyre",
"julius caeser", "othello", "crime and punishment", "frankenstein", "enders game", "gullivers travels", "les miserables", 
"the metamorphosis", "animorphs", "the raven", "where the crawdads sing", "green eggs and ham", "becoming michelle obama",
"war against all puerto ricans", "left to tell", "rocket boys", "bfg", "eragon", "everything on it", "warriors", "i robot",
"down these mean streets", "percy jackson and the olympians", "a shadow of what was lost", "the haunting of hill house",
"treasure island", "the art of war", "dracula", "don quixote", "the old man and the sea", "for whom the bell tolls", 
"charlotte's web", "a christmas carol", "necronomicon", "pet sematary", "witcher", "ready player one", "the martian"
]

let allTheGames = ["witcher", "spiderman", "call of duty", "gta", "halo", "last of us", "pokemon", "the sims", "final fantasy", 
"kingdom hearts", "yugioh", "super smash brothers", "mario party", "super mario world", "mario kart", "star fox", "crash bandicoot",
"banjo kazooie", "luigis mansion", "tetris", "sly cooper", "mass effect", "destiny", "rainbow six", "counter strike", "dota",
"league of legends", "starcraft", "world of warcraft", "civilization", "minecraft", "wii sports", "skyrim", "fallout", "diablo", 
"red dead redemption", "fifa", "madden", "sonic the hedgehog", "borderlands", "frogger", "metal gear solid", "assassins creed", 
"undertale", "mega man", "castlevania", "metroid", "soul caliber", "mortal kombat", "tekken", "contra", "tony hawks pro skater", 
"resident evil", "persona", "fornite", "apex legends", "goldeneye", "battlefield", "donky kong", "rock band", "silent hill", 
"batman arkham asylum", "uncharted", "overwatch", "pacman", "dark souls", "bloodborne", "shadow of the colossus", "god of war",
"bioshock", "the legend of zelda", "half life", "doom", "portal", "chrono trigger", "street fighter"]

let allCategories = {
    cats: ["movies", "tvShows", "misc", "musicArtists", "books", "games"],
    movies: allTheMovies,
    tvShows: allTheShows,
    misc: allTheWords,
    musicArtists: allTheMusicians,
    books: allTheBooks,
    games: allTheGames
}

module.exports = allCategories;