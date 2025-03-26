const books = {
    "Fantasy": [
        { title: "Game of Thrones", author: "George R.R. Martin", available: true, popular: true, new: false, description: "Epic fantasy series with political intrigue." },
        { title: "The Way of Kings", author: "Brandon Sanderson", available: false, popular: true, new: true, description: "A stormlight archive masterpiece." },
        { title: "The Name of the Wind", author: "Patrick Rothfuss", available: true, popular: true, new: false, description: "A tale of a gifted young man's journey." },
        { title: "Mistborn: The Final Empire", author: "Brandon Sanderson", available: true, popular: true, new: false, description: "A heist in a magical world." },
        { title: "The Hobbit", author: "J.R.R. Tolkien", available: true, popular: true, new: false, description: "A quest for treasure and adventure." },
        { title: "The Lord of the Rings", author: "J.R.R. Tolkien", available: true, popular: true, new: false, description: "An epic battle for Middle-earth." },
        { title: "Harry Potter and the Sorcerer’s Stone", author: "J.K. Rowling", available: true, popular: true, new: false, description: "A young wizard’s beginning." },
        { title: "The Wheel of Time: The Eye of the World", author: "Robert Jordan", available: true, popular: true, new: false, description: "A sprawling fantasy epic." },
        { title: "A Wizard of Earthsea", author: "Ursula K. Le Guin", available: true, popular: false, new: false, description: "A coming-of-age wizard tale." },
        { title: "The Sword of Shannara", author: "Terry Brooks", available: true, popular: false, new: false, description: "A classic fantasy quest." },
        { title: "The Lies of Locke Lamora", author: "Scott Lynch", available: true, popular: true, new: false, description: "A thief’s adventure in a fantasy city." },
        { title: "The Priory of the Orange Tree", author: "Samantha Shannon", available: true, popular: true, new: true, description: "A dragon-filled epic." },
        { title: "The Night Circus", author: "Erin Morgenstern", available: true, popular: true, new: false, description: "A magical competition unfolds." },
        { title: "The Once and Future King", author: "T.H. White", available: true, popular: false, new: false, description: "The legend of King Arthur retold." },
        { title: "The Poppy War", author: "R.F. Kuang", available: true, popular: true, new: true, description: "A war-torn fantasy inspired by history." },
        { title: "The Magicians", author: "Lev Grossman", available: true, popular: true, new: false, description: "A dark take on magical education." },
        { title: "The Black Company", author: "Glen Cook", available: true, popular: false, new: false, description: "Mercenaries in a grim fantasy world." },
        { title: "The Fifth Season", author: "N.K. Jemisin", available: true, popular: true, new: false, description: "A world-ending magical disaster." },
        { title: "The Dragonbone Chair", author: "Tad Williams", available: true, popular: false, new: false, description: "A throne’s destiny unfolds." },
        { title: "The Chronicles of Narnia", author: "C.S. Lewis", available: true, popular: true, new: false, description: "A magical land beyond the wardrobe." }
    ],
    "Science Fiction": [
        { title: "Dune", author: "Frank Herbert", available: true, popular: true, new: false, description: "A desert planet's epic tale." },
        { title: "The Left Hand of Darkness", author: "Ursula K. Le Guin", available: true, popular: false, new: false, description: "Exploration of gender and society." },
        { title: "Foundation", author: "Isaac Asimov", available: true, popular: true, new: false, description: "A galactic empire’s decline." },
        { title: "Neuromancer", author: "William Gibson", available: true, popular: true, new: false, description: "A cyberpunk classic." },
        { title: "Hyperion", author: "Dan Simmons", available: true, popular: true, new: false, description: "A pilgrimage through space and time." },
        { title: "Ender’s Game", author: "Orson Scott Card", available: true, popular: true, new: false, description: "A child genius saves humanity." },
        { title: "The Martian", author: "Andy Weir", available: true, popular: true, new: false, description: "Survival on Mars." },
        { title: "Snow Crash", author: "Neal Stephenson", available: true, popular: true, new: false, description: "A virtual reality thriller." },
        { title: "Do Androids Dream of Electric Sheep?", author: "Philip K. Dick", available: true, popular: true, new: false, description: "A bounty hunter’s dilemma." },
        { title: "1984", author: "George Orwell", available: true, popular: true, new: false, description: "A dystopian surveillance state." },
        { title: "Brave New World", author: "Aldous Huxley", available: true, popular: true, new: false, description: "A controlled utopian society." },
        { title: "The Three-Body Problem", author: "Cixin Liu", available: true, popular: true, new: true, description: "Alien contact and human survival." },
        { title: "Roadside Picnic", author: "Arkady and Boris Strugatsky", available: true, popular: false, new: false, description: "Mysterious alien zones." },
        { title: "I, Robot", author: "Isaac Asimov", available: true, popular: true, new: false, description: "Robots and ethics collide." },
        { title: "Blindsight", author: "Peter Watts", available: true, popular: false, new: false, description: "First contact with an alien mind." },
        { title: "The Expanse: Leviathan Wakes", author: "James S.A. Corey", available: true, popular: true, new: false, description: "Space opera and political intrigue." },
        { title: "Project Hail Mary", author: "Andy Weir", available: true, popular: true, new: true, description: "A mission to reverse solar dimming." },
        { title: "Children of Time", author: "Adrian Tchaikovsky", available: true, popular: true, new: false, description: "Evolution on an alien planet." },
        { title: "The Time Machine", author: "H.G. Wells", available: true, popular: false, new: false, description: "A journey through time." },
        { title: "Ancillary Justice", author: "Ann Leckie", available: true, popular: true, new: false, description: "An AI’s quest for justice." }
    ],
    "Dystopian": [
        { title: "The Hunger Games", author: "Suzanne Collins", available: true, popular: true, new: false, description: "A fight for survival in a dystopian world." },
        { title: "Nineteen Eighty-Four", author: "George Orwell", available: true, popular: true, new: false, description: "A totalitarian surveillance state." },
        { title: "Brave New World", author: "Aldous Huxley", available: true, popular: true, new: false, description: "A controlled utopian society." },
        { title: "The Handmaid’s Tale", author: "Margaret Atwood", available: true, popular: true, new: false, description: "A theocratic dystopia." },
        { title: "Fahrenheit 451", author: "Ray Bradbury", available: true, popular: true, new: false, description: "A world where books are burned." },
        { title: "The Road", author: "Cormac McCarthy", available: true, popular: true, new: false, description: "A post-apocalyptic journey." },
        { title: "Divergent", author: "Veronica Roth", available: true, popular: true, new: false, description: "A society divided by traits." },
        { title: "The Giver", author: "Lois Lowry", available: true, popular: true, new: false, description: "A controlled, emotionless society." },
        { title: "Station Eleven", author: "Emily St. John Mandel", available: true, popular: true, new: false, description: "Art in a post-pandemic world." },
        { title: "The Children of Men", author: "P.D. James", available: true, popular: false, new: false, description: "A world without children." },
        { title: "Parable of the Sower", author: "Octavia E. Butler", available: true, popular: true, new: false, description: "A collapsing society’s hope." },
        { title: "We", author: "Yevgeny Zamyatin", available: true, popular: false, new: false, description: "The original dystopian novel." },
        { title: "Never Let Me Go", author: "Kazuo Ishiguro", available: true, popular: true, new: false, description: "A haunting dystopian love story." },
        { title: "The Maze Runner", author: "James Dashner", available: true, popular: true, new: false, description: "Teens trapped in a deadly maze." },
        { title: "The Testaments", author: "Margaret Atwood", available: true, popular: true, new: true, description: "A sequel to The Handmaid’s Tale." },
        { title: "Anthem", author: "Ayn Rand", available: true, popular: false, new: false, description: "Individuality in a collectivist world." },
        { title: "The Drowned World", author: "J.G. Ballard", available: true, popular: false, new: false, description: "A flooded Earth’s psychological toll." },
        { title: "Logan's Run", author: "William F. Nolan", available: true, popular: false, new: false, description: "A society with an age limit." },
        { title: "Oryx and Crake", author: "Margaret Atwood", available: true, popular: true, new: false, description: "A bioengineered apocalypse." },
        { title: "The Power", author: "Naomi Alderman", available: true, popular: true, new: false, description: "Women gain a shocking power." }
    ],
    "Action & Adventure": [
        { title: "Life of Pi", author: "Yann Martel", available: true, popular: false, new: false, description: "A journey of survival with a tiger." },
        { title: "The Hobbit", author: "J.R.R. Tolkien", available: true, popular: true, new: false, description: "A quest for treasure and adventure." },
        { title: "Treasure Island", author: "Robert Louis Stevenson", available: true, popular: true, new: false, description: "A pirate’s treasure hunt." },
        { title: "The Count of Monte Cristo", author: "Alexandre Dumas", available: true, popular: true, new: false, description: "Revenge and redemption." },
        { title: "The Three Musketeers", author: "Alexandre Dumas", available: true, popular: true, new: false, description: "Swashbuckling heroism." },
        { title: "Jurassic Park", author: "Michael Crichton", available: true, popular: true, new: false, description: "Dinosaurs run amok." },
        { title: "The Odyssey", author: "Homer", available: true, popular: false, new: false, description: "A hero’s epic journey home." },
        { title: "Robinson Crusoe", author: "Daniel Defoe", available: true, popular: true, new: false, description: "Survival on a deserted island." },
        { title: "The Call of the Wild", author: "Jack London", available: true, popular: true, new: false, description: "A dog’s adventure in the wild." },
        { title: "Around the World in Eighty Days", author: "Jules Verne", available: true, popular: true, new: false, description: "A race against time." },
        { title: "The Lost World", author: "Arthur Conan Doyle", available: true, popular: false, new: false, description: "Dinosaurs in a hidden land." },
        { title: "King Solomon’s Mines", author: "H. Rider Haggard", available: true, popular: false, new: false, description: "A treasure hunt in Africa." },
        { title: "The Bourne Identity", author: "Robert Ludlum", available: true, popular: true, new: false, description: "A spy with amnesia." },
        { title: "Hatchet", author: "Gary Paulsen", available: true, popular: true, new: false, description: "A boy survives a plane crash." },
        { title: "The Adventures of Tom Sawyer", author: "Mark Twain", available: true, popular: true, new: false, description: "A boy’s mischievous exploits." },
        { title: "The Sea-Wolf", author: "Jack London", available: true, popular: false, new: false, description: "A brutal sea captain’s tale." },
        { title: "The Jungle Book", author: "Rudyard Kipling", available: true, popular: true, new: false, description: "A boy raised by wolves." },
        { title: "Journey to the Center of the Earth", author: "Jules Verne", available: true, popular: true, new: false, description: "An underground adventure." },
        { title: "The Swiss Family Robinson", author: "Johann David Wyss", available: true, popular: false, new: false, description: "A family’s island survival." },
        { title: "The Last of the Mohicans", author: "James Fenimore Cooper", available: true, popular: true, new: false, description: "War and survival in colonial America." }
    ],
    "Detective & Mystery": [
        { title: "The Adventures of Sherlock Holmes", author: "Arthur Conan Doyle", available: true, popular: true, new: false, description: "Classic detective stories." },
        { title: "Murder on the Orient Express", author: "Agatha Christie", available: true, popular: true, new: false, description: "A murder mystery on a train." },
        { title: "The Hound of the Baskervilles", author: "Arthur Conan Doyle", available: true, popular: true, new: false, description: "A supernatural mystery." },
        { title: "And Then There Were None", author: "Agatha Christie", available: true, popular: true, new: false, description: "Ten strangers, one killer." },
        { title: "The Big Sleep", author: "Raymond Chandler", available: true, popular: true, new: false, description: "A hard-boiled detective tale." },
        { title: "The Maltese Falcon", author: "Dashiell Hammett", available: true, popular: true, new: false, description: "A private eye’s quest." },
        { title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson", available: true, popular: true, new: false, description: "A dark investigative thriller." },
        { title: "In the Woods", author: "Tana French", available: true, popular: true, new: false, description: "A detective’s haunting past." },
        { title: "The Cuckoo’s Calling", author: "Robert Galbraith", available: true, popular: true, new: false, description: "A private detective’s big case." },
        { title: "The Shadow of the Wind", author: "Carlos Ruiz Zafón", available: true, popular: true, new: false, description: "A literary mystery in Barcelona." },
        { title: "The Secret History", author: "Donna Tartt", available: true, popular: true, new: false, description: "A murder among college friends." },
        { title: "The Daughter of Time", author: "Josephine Tey", available: true, popular: false, new: false, description: "A historical mystery unravelled." },
        { title: "The Woman in White", author: "Wilkie Collins", available: true, popular: true, new: false, description: "A Victorian mystery classic." },
        { title: "The No. 1 Ladies’ Detective Agency", author: "Alexander McCall Smith", available: true, popular: true, new: false, description: "A Botswana detective’s tales." },
        { title: "The Thin Man", author: "Dashiell Hammett", available: true, popular: false, new: false, description: "A witty detective duo." },
        { title: "The Name of the Rose", author: "Umberto Eco", available: true, popular: true, new: false, description: "A medieval monastery mystery." },
        { title: "The Alienist", author: "Caleb Carr", available: true, popular: true, new: false, description: "A psychologist hunts a killer." },
        { title: "The Yard", author: "Alex Grecian", available: true, popular: false, new: false, description: "Victorian London’s murder squad." },
        { title: "The Silent Patient", author: "Alex Michaelides", available: true, popular: true, new: true, description: "A mute patient’s secrets." },
        { title: "The Long Goodbye", author: "Raymond Chandler", available: true, popular: true, new: false, description: "A detective’s complex case." }
    ],
    "Thriller & Suspense": [
        { title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson", available: true, popular: true, new: false, description: "A dark investigative thriller." },
        { title: "Gone Girl", author: "Gillian Flynn", available: true, popular: true, new: false, description: "A twisted tale of marriage and deception." },
        { title: "The Da Vinci Code", author: "Dan Brown", available: true, popular: true, new: false, description: "A race to uncover a secret." },
        { title: "The Silence of the Lambs", author: "Thomas Harris", available: true, popular: true, new: false, description: "A hunt for a serial killer." },
        { title: "The Bourne Identity", author: "Robert Ludlum", available: true, popular: true, new: false, description: "A spy with amnesia." },
        { title: "The Firm", author: "John Grisham", available: true, popular: true, new: false, description: "A lawyer uncovers corruption." },
        { title: "The Shining", author: "Stephen King", available: true, popular: true, new: false, description: "A hotel’s dark secrets." },
        { title: "Shutter Island", author: "Dennis Lehane", available: true, popular: true, new: false, description: "A psychological twist on an island." },
        { title: "The Hunt for Red October", author: "Tom Clancy", available: true, popular: true, new: false, description: "A submarine defection thriller." },
        { title: "The Pelican Brief", author: "John Grisham", available: true, popular: true, new: false, description: "A legal conspiracy unfolds." },
        { title: "Before I Go to Sleep", author: "S.J. Watson", available: true, popular: true, new: false, description: "A woman’s memory resets daily." },
        { title: "The Night Manager", author: "John le Carré", available: true, popular: true, new: false, description: "Espionage and arms dealing." },
        { title: "The Woman in the Window", author: "A.J. Finn", available: true, popular: true, new: false, description: "A recluse witnesses a crime." },
        { title: "The Couple Next Door", author: "Shari Lapena", available: true, popular: true, new: false, description: "A missing baby’s mystery." },
        { title: "The Spy Who Came in from the Cold", author: "John le Carré", available: true, popular: true, new: false, description: "A Cold War espionage tale." },
        { title: "Misery", author: "Stephen King", available: true, popular: true, new: false, description: "A writer held captive." },
        { title: "The Last Thing He Told Me", author: "Laura Dave", available: true, popular: true, new: true, description: "A woman searches for answers." },
        { title: "The Patient", author: "Jasper DeWitt", available: true, popular: false, new: true, description: "A chilling hospital mystery." },
        { title: "The Jackal", author: "Frederick Forsyth", available: true, popular: true, new: false, description: "An assassin targets a president." },
        { title: "Dark Places", author: "Gillian Flynn", available: true, popular: true, new: false, description: "A survivor revisits a massacre." }
    ],
    "Romance": [
        { title: "The Notebook", author: "Nicholas Sparks", available: true, popular: true, new: false, description: "A timeless love story." },
        { title: "Jane Eyre", author: "Charlotte Brontë", available: true, popular: true, new: false, description: "A gothic romance classic." },
        { title: "Pride and Prejudice", author: "Jane Austen", available: true, popular: true, new: false, description: "Love and societal expectations." },
        { title: "Outlander", author: "Diana Gabaldon", available: true, popular: true, new: false, description: "Time-travel romance in Scotland." },
        { title: "Me Before You", author: "Jojo Moyes", available: true, popular: true, new: false, description: "A tear-jerking love story." },
        { title: "The Fault in Our Stars", author: "John Green", available: true, popular: true, new: false, description: "A heartfelt YA romance." },
        { title: "Bridgerton: The Duke and I", author: "Julia Quinn", available: true, popular: true, new: false, description: "Regency romance intrigue." },
        { title: "Wuthering Heights", author: "Emily Brontë", available: true, popular: true, new: false, description: "A dark, passionate tale." },
        { title: "The Time Traveler’s Wife", author: "Audrey Niffenegger", available: true, popular: true, new: false, description: "Love across time." },
        { title: "A Walk to Remember", author: "Nicholas Sparks", available: true, popular: true, new: false, description: "A transformative love story." },
        { title: "Sense and Sensibility", author: "Jane Austen", available: true, popular: true, new: false, description: "Sisters navigate love and loss." },
        { title: "The Kiss Quotient", author: "Helen Hoang", available: true, popular: true, new: false, description: "A modern romance with math." },
        { title: "Red, White & Royal Blue", author: "Casey McQuiston", available: true, popular: true, new: true, description: "A prince and a first son fall in love." },
        { title: "The Hating Game", author: "Sally Thorne", available: true, popular: true, new: false, description: "Enemies to lovers in an office." },
        { title: "Beach Read", author: "Emily Henry", available: true, popular: true, new: true, description: "Writers swap genres and hearts." },
        { title: "Love in the Time of Cholera", author: "Gabriel García Márquez", available: true, popular: true, new: false, description: "Unrequited love endures." },
        { title: "Persuasion", author: "Jane Austen", available: true, popular: true, new: false, description: "A second chance at love." },
        { title: "It Ends with Us", author: "Colleen Hoover", available: true, popular: true, new: false, description: "A complex love triangle." },
        { title: "The Rosie Project", author: "Graeme Simsion", available: true, popular: true, new: false, description: "A quirky quest for love." },
        { title: "Eleanor & Park", author: "Rainbow Rowell", available: true, popular: true, new: false, description: "A tender teen romance." }
    ],
    "Horror": [
        { title: "Carrie", author: "Stephen King", available: true, popular: true, new: false, description: "A telekinetic horror tale." },
        { title: "The Haunting of Hill House", author: "Shirley Jackson", available: true, popular: true, new: false, description: "A chilling haunted house story." },
        { title: "The Shining", author: "Stephen King", available: true, popular: true, new: false, description: "A hotel’s dark secrets." },
        { title: "Dracula", author: "Bram Stoker", available: true, popular: true, new: false, description: "The vampire classic." },
        { title: "It", author: "Stephen King", available: true, popular: true, new: false, description: "A clown terrorizes a town." },
        { title: "Frankenstein", author: "Mary Shelley", available: true, popular: true, new: false, description: "A monster’s tragic creation." },
        { title: "The Exorcist", author: "William Peter Blatty", available: true, popular: true, new: false, description: "A demonic possession." },
        { title: "Pet Sematary", author: "Stephen King", available: true, popular: true, new: false, description: "A deadly burial ground." },
        { title: "The Turn of the Screw", author: "Henry James", available: true, popular: true, new: false, description: "A ghostly governess tale." },
        { title: "Bird Box", author: "Josh Malerman", available: true, popular: true, new: false, description: "Blindfolded survival horror." },
        { title: "Mexican Gothic", author: "Silvia Moreno-Garcia", available: true, popular: true, new: true, description: "A eerie Mexican mansion." },
        { title: "The Call of Cthulhu", author: "H.P. Lovecraft", available: true, popular: true, new: false, description: "Cosmic horror unfolds." },
        { title: "House of Leaves", author: "Mark Z. Danielewski", available: true, popular: true, new: false, description: "A house defies reality." },
        { title: "The Strange Case of Dr Jekyll and Mr Hyde", author: "Robert Louis Stevenson", available: true, popular: true, new: false, description: "A split personality nightmare." },
        { title: "Rosemary’s Baby", author: "Ira Levin", available: true, popular: true, new: false, description: "A sinister pregnancy." },
        { title: "The Amityville Horror", author: "Jay Anson", available: true, popular: true, new: false, description: "A haunted house’s terror." },
        { title: "Something Wicked This Way Comes", author: "Ray Bradbury", available: true, popular: true, new: false, description: "A dark carnival arrives." },
        { title: "The Ritual", author: "Adam Nevill", available: true, popular: false, new: false, description: "A forest hides ancient evil." },
        { title: "The Outsider", author: "Stephen King", available: true, popular: true, new: false, description: "A shape-shifting horror." },
        { title: "The Cabin at the End of the World", author: "Paul Tremblay", available: true, popular: true, new: false, description: "A family’s apocalyptic choice." }
    ],
    "Historical Fiction": [
        { title: "All the Light We Cannot See", author: "Anthony Doerr", available: true, popular: true, new: false, description: "A WWII tale of resilience." },
        { title: "One Hundred Years of Solitude", author: "Gabriel Garcia Marquez", available: true, popular: true, new: false, description: "A multi-generational saga." },
        { title: "The Nightingale", author: "Kristin Hannah", available: true, popular: true, new: false, description: "Sisters in WWII France." },
        { title: "The Book Thief", author: "Markus Zusak", available: true, popular: true, new: false, description: "A girl’s story in Nazi Germany." },
        { title: "Atonement", author: "Ian McEwan", available: true, popular: true, new: false, description: "A lie’s lasting consequences." },
        { title: "The Pillars of the Earth", author: "Ken Follett", available: true, popular: true, new: false, description: "A cathedral’s construction." },
        { title: "Gone with the Wind", author: "Margaret Mitchell", available: true, popular: true, new: false, description: "Love in the Civil War South." },
        { title: "The Paris Library", author: "Janet Skeslien Charles", available: true, popular: true, new: false, description: "Librarians in WWII Paris." },
        { title: "The Name of the Rose", author: "Umberto Eco", available: true, popular: true, new: false, description: "A medieval monastery mystery." },
        { title: "The Shadow of the Wind", author: "Carlos Ruiz Zafón", available: true, popular: true, new: false, description: "Post-war Barcelona secrets." },
        { title: "Out of Africa", author: "Isak Dinesen", available: true, popular: false, new: false, description: "A memoir of colonial Kenya." },
        { title: "The Red Tent", author: "Anita Diamant", available: true, popular: true, new: false, description: "A biblical woman’s story." },
        { title: "The Other Boleyn Girl", author: "Philippa Gregory", available: true, popular: true, new: false, description: "Tudor court intrigue." },
        { title: "Memoirs of a Geisha", author: "Arthur Golden", available: true, popular: true, new: false, description: "A geisha’s life in Japan." },
        { title: "The Kite Runner", author: "Khaled Hosseini", available: true, popular: true, new: false, description: "Friendship in war-torn Afghanistan." },
        { title: "The Physician", author: "Noah Gordon", available: true, popular: false, new: false, description: "A medieval healer’s journey." },
        { title: "The Lions of Fifth Avenue", author: "Fiona Davis", available: true, popular: true, new: true, description: "A library’s historical secrets." },
        { title: "I, Claudius", author: "Robert Graves", available: true, popular: true, new: false, description: "Roman Empire’s political intrigue." },
        { title: "The Song of Achilles", author: "Madeline Miller", available: true, popular: true, new: false, description: "A reimagined Trojan War love story." },
        { title: "The Grapes of Wrath", author: "John Steinbeck", available: true, popular: true, new: false, description: "The Great Depression’s toll." }
    ],
    "Young Adult": [
        { title: "The Fault in Our Stars", author: "John Green", available: true, popular: true, new: false, description: "A heartfelt YA romance." },
        { title: "Harry Potter and the Sorcerer’s Stone", author: "J.K. Rowling", available: true, popular: true, new: false, description: "A young wizard’s beginning." },
        { title: "The Hunger Games", author: "Suzanne Collins", available: true, popular: true, new: false, description: "A fight for survival in a dystopian world." },
        { title: "Divergent", author: "Veronica Roth", available: true, popular: true, new: false, description: "A society divided by traits." },
        { title: "The Giver", author: "Lois Lowry", available: true, popular: true, new: false, description: "A controlled, emotionless society." },
        { title: "The Maze Runner", author: "James Dashner", available: true, popular: true, new: false, description: "Teens trapped in a deadly maze." },
        { title: "Percy Jackson: The Lightning Thief", author: "Rick Riordan", available: true, popular: true, new: false, description: "A demigod’s quest." },
        { title: "Twilight", author: "Stephenie Meyer", available: true, popular: true, new: false, description: "A vampire romance." },
        { title: "The Perks of Being a Wallflower", author: "Stephen Chbosky", available: true, popular: true, new: false, description: "A teen’s coming-of-age." },
        { title: "Six of Crows", author: "Leigh Bardugo", available: true, popular: true, new: false, description: "A heist in a fantasy world." },
        { title: "To All the Boys I’ve Loved Before", author: "Jenny Han", available: true, popular: true, new: false, description: "Love letters gone public." },
        { title: "Eleanor & Park", author: "Rainbow Rowell", available: true, popular: true, new: false, description: "A tender teen romance." },
        { title: "The Book Thief", author: "Markus Zusak", available: true, popular: true, new: false, description: "A girl’s story in Nazi Germany." },
        { title: "Shadow and Bone", author: "Leigh Bardugo", available: true, popular: true, new: false, description: "A magical war-torn world." },
        { title: "Miss Peregrine’s Home for Peculiar Children", author: "Ransom Riggs", available: true, popular: true, new: false, description: "Peculiar kids and time loops." },
        { title: "The Hate U Give", author: "Angie Thomas", available: true, popular: true, new: false, description: "A teen confronts racism." },
        { title: "A Court of Thorns and Roses", author: "Sarah J. Maas", available: true, popular: true, new: false, description: "A faerie world adventure." },
        { title: "Legend", author: "Marie Lu", available: true, popular: true, new: false, description: "A dystopian cat-and-mouse game." },
        { title: "The Selection", author: "Kiera Cass", available: true, popular: true, new: false, description: "A royal competition for love." },
        { title: "We Were Liars", author: "E. Lockhart", available: true, popular: true, new: false, description: "A family’s dark secrets." }
    ],
    "Children’s Fiction": [
        { title: "Goodnight Moon", author: "Margaret Wise Brown", available: true, popular: true, new: false, description: "A soothing bedtime story." },
        { title: "Charlotte’s Web", author: "E.B. White", available: true, popular: true, new: false, description: "A tale of friendship and sacrifice." },
        { title: "The Very Hungry Caterpillar", author: "Eric Carle", available: true, popular: true, new: false, description: "A caterpillar’s feast." },
        { title: "Where the Wild Things Are", author: "Maurice Sendak", available: true, popular: true, new: false, description: "A wild adventure." },
        { title: "Matilda", author: "Roald Dahl", available: true, popular: true, new: false, description: "A gifted girl’s triumph." },
        { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis", available: true, popular: true, new: false, description: "A magical land beyond the wardrobe." },
        { title: "Charlie and the Chocolate Factory", author: "Roald Dahl", available: true, popular: true, new: false, description: "A candy-filled adventure." },
        { title: "The Gruffalo", author: "Julia Donaldson", available: true, popular: true, new: false, description: "A mouse outsmarts predators." },
        { title: "Winnie-the-Pooh", author: "A.A. Milne", available: true, popular: true, new: false, description: "Adventures in the Hundred Acre Wood." },
        { title: "The Cat in the Hat", author: "Dr. Seuss", available: true, popular: true, new: false, description: "A mischievous cat’s visit." },
        { title: "James and the Giant Peach", author: "Roald Dahl", available: true, popular: true, new: false, description: "A boy’s fantastical journey." },
        { title: "The Secret Garden", author: "Frances Hodgson Burnett", available: true, popular: true, new: false, description: "A garden heals a family." },
        { title: "Peter Pan", author: "J.M. Barrie", available: true, popular: true, new: false, description: "A boy who never grows up." },
        { title: "The Wind in the Willows", author: "Kenneth Grahame", available: true, popular: true, new: false, description: "Animal friends by the river." },
        { title: "Alice’s Adventures in Wonderland", author: "Lewis Carroll", available: true, popular: true, new: false, description: "A curious girl’s wonderland." },
        { title: "The Tale of Peter Rabbit", author: "Beatrix Potter", available: true, popular: true, new: false, description: "A rabbit’s garden mischief." },
        { title: "Pippi Longstocking", author: "Astrid Lindgren", available: true, popular: true, new: false, description: "A quirky girl’s adventures." },
        { title: "The BFG", author: "Roald Dahl", available: true, popular: true, new: false, description: "A friendly giant’s tale." },
        { title: "Harry Potter and the Sorcerer’s Stone", author: "J.K. Rowling", available: true, popular: true, new: false, description: "A young wizard’s beginning." },
        { title: "The Jungle Book", author: "Rudyard Kipling", available: true, popular: true, new: false, description: "A boy raised by wolves." }
    ]
};

        let user = { borrowedBooks: JSON.parse(localStorage.getItem('borrowedBooks')) || [] };

        function saveToLocalStorage() {
            localStorage.setItem('borrowedBooks', JSON.stringify(user.borrowedBooks));
        }

        function showAllBooks() {
            const bookList = document.getElementById('book-list');
            bookList.innerHTML = '';
            Object.keys(books).forEach(genre => {
                books[genre].forEach(book => {
                    renderBookCard(book, genre, bookList);
                });
            });
        }

        function showBooks(genre) {
            const bookList = document.getElementById('book-list');
            bookList.innerHTML = '';
            books[genre].forEach(book => {
                renderBookCard(book, genre, bookList);
            });
        }

        function renderBookCard(book, genre, bookList) {
            const bookCard = document.createElement('div');
            bookCard.className = 'book-card bg-white shadow-lg rounded-xl p-6 mb-6';
            bookCard.innerHTML = `
                <div class="cursor-pointer" onclick="showBookDetails('${book.title}', '${genre}', '${book.author}', '${book.description}')">
                    <h3 class="text-xl font-bold text-gray-800">${book.title}</h3>
                    <p class="text-gray-600 mt-2">Author: ${book.author}</p>
                    <p class="text-gray-600">Genre: ${genre}</p>
                </div>
                <button class="${book.available ? 'borrow-btn' : 'bg-gray-400 cursor-not-allowed'} text-white rounded-full px-4 py-2 mt-4 w-full" 
                    ${book.available ? `onclick="borrowBook('${book.title}', '${genre}')"` : 'disabled'}>
                    ${book.available ? 'Borrow Now' : 'Not Available'}
                </button>
            `;
            bookList.appendChild(bookCard);
        }

        function searchBooks() {
            const searchInput = document.getElementById('searchInput').value.toLowerCase();
            const bookList = document.getElementById('book-list');
            bookList.innerHTML = '';
            Object.keys(books).forEach(genre => {
                books[genre].forEach(book => {
                    if (book.title.toLowerCase().includes(searchInput) || 
                        book.author.toLowerCase().includes(searchInput) || 
                        genre.toLowerCase().includes(searchInput)) {
                        renderBookCard(book, genre, bookList);
                    }
                });
            });
        }

        function borrowBook(title, genre) {
            books[genre].forEach(book => {
                if (book.title === title && book.available) {
                    book.available = false;
                    user.borrowedBooks.push({ title, genre, author: book.author });
                    saveToLocalStorage();
                    alert(`You have borrowed "${title}" successfully!`);
                    showAllBooks();
                }
            });
        }

        function showMyBooks() {
            const bookList = document.getElementById('book-list');
            bookList.innerHTML = '<h3 class="text-2xl font-bold text-gray-800 mb-4 text-center">My Borrowed Books</h3>';
            if (user.borrowedBooks.length === 0) {
                bookList.innerHTML += '<p class="text-gray-600 text-center">You haven’t borrowed any books yet.</p>';
            } else {
                user.borrowedBooks.forEach(book => {
                    const bookCard = document.createElement('div');
                    bookCard.className = 'book-card bg-white shadow-lg rounded-xl p-6 mb-6';
                    bookCard.innerHTML = `
                        <h3 class="text-xl font-bold text-gray-800">${book.title}</h3>
                        <p class="text-gray-600 mt-2">Author: ${book.author}</p>
                        <p class="text-gray-600">Genre: ${book.genre}</p>
                        <button class="bg-red-600 text-white rounded-full px-4 py-2 mt-4 w-full hover:bg-red-700" onclick="returnBook('${book.title}', '${book.genre}')">Return</button>
                    `;
                    bookList.appendChild(bookCard);
                });
            }
        }

        function returnBook(title, genre) {
            user.borrowedBooks = user.borrowedBooks.filter(book => book.title !== title);
            books[genre].find(book => book.title === title).available = true;
            saveToLocalStorage();
            showMyBooks();
        }

        function showBookDetails(title, genre, author, description) {
            document.getElementById('modalTitle').textContent = title;
            document.getElementById('modalAuthor').textContent = `Author: ${author}`;
            document.getElementById('modalGenre').textContent = `Genre: ${genre}`;
            document.getElementById('modalDescription').textContent = description;
            document.getElementById('bookModal').classList.remove('hidden');
        }

        function closeModal() {
            document.getElementById('bookModal').classList.add('hidden');
        }

        function filterBooks(filter) {
            const bookList = document.getElementById('book-list');
            bookList.innerHTML = '';
            Object.keys(books).forEach(genre => {
                books[genre].forEach(book => {
                    if (filter === 'all' || 
                        (filter === 'popular' && book.popular) || 
                        (filter === 'new' && book.new)) {
                        renderBookCard(book, genre, bookList);
                    }
                });
            });
        }

        function toggleMenu() {
            const navLinks = document.getElementById('nav-links');
            navLinks.classList.toggle('active');
        }

        // Load default view
        window.onload = showAllBooks;