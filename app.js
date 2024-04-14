let petchoice
let musicchoice
let gooutchoice
let schedulechoice
let workoutchoice
let seriouschoice
let useranswers = []
const matchedPets=[]

//all cats
let queenquintessa=["cat", "old", "stay home", "schedule", "yoga", "playful"]
let murphy=["cat", "old", "stay home", "schedule", "yoga", "serious"]
let eva=["cat", "new", "stay home", "schedule", "run", "serious"]
let luna=["cat", "old", "go out", "schedule", "run", "serious"]
let ginger=["cat", "old", "stay home", "schedule", "yoga", "serious"]
let mickey=["cat", "new", "stay home", "schedule", "run", "playful"]
let camille=["cat", "new", "stay home", "improvise", "run", "playful"]

//all dogs
let tulip=['dog', "new", 'go out', 'schedule', 'run', 'playful']
let groot=['dog', 'old', 'stay home', 'schedule', 'run', 'playful']
let venus=['dog', 'new', 'go out', 'schedule', 'run', 'serious']
let cocoapuff=['dog', 'new', 'go out', 'schedule', 'yoga', 'playful']
let wonder=['dog', 'new', 'go out', 'improvise', 'run', 'playful']
let poppy=['dog', 'old', 'stay home', 'schedule', 'yoga', 'serious']
let patch=['dog', 'new', 'go out', 'improvise', 'run', 'playful']
let hershey=['dog', 'old', 'stay home', 'schedule', 'run', 'serious']
let bowie=['dog', 'old', 'go out', 'improvise', 'run', 'playful']
let nami=['dog', 'old', 'stay home', 'schedule', 'yoga', 'playful']
let angel=['dog', 'new', 'stay home', 'schedule', 'run', 'playful']
let eddie=['dog', 'new', 'go out', 'improvise', 'yoga', 'playful']
let luca=['dog', 'old', 'stay home', 'schedule', 'yoga', 'serious']
let pearl=['dog', 'new', 'go out', 'improvise', 'run', 'playful']
let dumpling=['dog', 'new', 'stay home', 'schedule', 'run', 'playful']
let opal=['dog', 'new', 'stay home', 'improvise', 'run', 'playful']
let reina=['dog', 'new', 'go out', 'improvise', 'run', 'playful']
let walter=['dog', 'new', 'go out', 'improvise', 'yoga', 'playful']
let posey=['dog', 'old', 'stay home', 'improvise', 'yoga', 'serious']
let forest=['dog', 'new', 'stay home', 'schedule', 'run', 'serious']
let diesel=['dog', 'old', 'go out', 'schedule', 'run', 'playful']
let miniwheat=['dog', 'new', 'stay home', 'schedule', 'run', 'playful']
let honeybunches=['dog', 'new', 'go out', 'schedule', 'yoga', 'serious']
let ollie=['dog', 'old', 'go out', 'improvise', 'run', 'playful']
let cole=['dog', 'new', 'go out', 'improvise', 'run', 'playful']
let missy=['dog', 'old', 'stay home', 'schedule', 'yoga', 'playful']
let rocket=['dog', 'new', 'go out', 'improvise', 'run', 'playful']
let cosmo=['dog', 'new', 'stay home', 'schedule', 'yoga', 'playful']
let rubyred=['dog', 'new', 'stay home', 'schedule', 'run', 'playful']




document.getElementById("catbutton").addEventListener('click', function(){
    petchoice="cat"
});
document.getElementById("dogbutton").addEventListener('click', function(){
    petchoice="dog"
});

document.getElementById("oldmusicbutton").addEventListener('click', function(){
    musicchoice="old"
});
document.getElementById("newmusicbutton").addEventListener('click', function(){
    musicchoice="new"
});

document.getElementById("gooutbutton").addEventListener('click', function(){
    gooutchoice="go out"
});
document.getElementById("stayhomebutton").addEventListener('click', function(){
    gooutchoice="stay home"
});

document.getElementById("schedulebutton").addEventListener('click', function(){
    schedulechoice="schedule"
});
document.getElementById("improvisebutton").addEventListener('click', function(){
    schedulechoice="improvise"
});

document.getElementById("runbutton").addEventListener('click', function(){
    workoutchoice="run"
});
document.getElementById("yogabutton").addEventListener('click', function(){
    workoutchoice="yoga"
});

document.getElementById("seriousbutton").addEventListener('click', function(){
    seriouschoice="serious"
});
document.getElementById("playfulbutton").addEventListener('click', function(){
    seriouschoice="playful"
});


document.getElementById("resultbutton").addEventListener('click' , function(){
    if(!petchoice||!musicchoice||!gooutchoice||!schedulechoice||!workoutchoice||!seriouschoice){
        document.getElementById('resultTitle').style.color='red';
        document.getElementById('resultTitle').innerHTML = 'Please answer all questions';

    } else{
        useranswers=[]
        
        useranswers.push(petchoice,musicchoice,gooutchoice,schedulechoice,workoutchoice,seriouschoice);
        console.log(useranswers)
        matchedPets.length=0;
        document.getElementById('matchedPets').innerHTML = '';
        document.getElementById('resultTitle').style.color='black';
        document.getElementById('resultTitle').innerHTML = 'You might like:';

        if (petchoice=='cat'){
        if (checkmatch(queenquintessa) >= 4){
            matchedPets.push({ name: 'Queen Quintessa', image: 'queenquintessa.jpg', description: 'https://www.sfspca.org/sfspca-adoption/55431244/' });
        }
        if (checkmatch(murphy) >= 4){
            matchedPets.push({ name: 'Murphy', image: 'murphy.jpg', description: 'https://www.sfspca.org/sfspca-adoption/14188207/' });

        }
        if (checkmatch(eva) >= 4){
            matchedPets.push({ name: 'Eva', image: 'eva.jpg', description: 'https://www.sfspca.org/sfspca-adoption/55585619/' });

        }
        if (checkmatch(luna) >= 4){
            matchedPets.push({ name: 'Luna', image: 'luna.jpg', description: 'https://www.sfspca.org/sfspca-adoption/55716131/' });

        }

        }
        if (checkmatch(ginger) >= 4){
            matchedPets.push({ name: 'Ginger', image: 'ginger.jpg', description: 'https://www.sfspca.org/sfspca-adoption/55716114/' });

        }
        if (checkmatch(mickey) >= 4){
            matchedPets.push({ name: 'Mickey', image: 'mickey.jpg', description: 'https://www.sfspca.org/sfspca-adoption/55552508/' });

        }
        if (checkmatch(camille) >= 4){
            matchedPets.push({ name: 'Camille', image: 'camille.jpg', description: 'https://www.sfspca.org/sfspca-adoption/55701416/' });
    
        }
        }
        if (petchoice=='dog'){
            if (checkmatch(tulip) >= 5){matchedPets.push({ name: 'Tulip', image: 'tulip.jpg', description: 'https://www.sfspca.org/sfspca-adoption/50906698/' });}
            if (checkmatch(groot) >= 5){matchedPets.push({ name: 'Groot', image: 'groot.jpg', description: 'https://www.sfspca.org/sfspca-adoption/51987507/' });}
            if (checkmatch(venus) >= 5){matchedPets.push({ name: 'Venus', image: 'venus.jpg', description: 'https://www.sfspca.org/sfspca-adoption/50506098/' });}
            if (checkmatch(cocoapuff) >= 5){matchedPets.push({ name: 'Cocoa Puff', image: 'cocoapuff.jpg', description: 'https://www.sfspca.org/sfspca-adoption/52132231/' });}
            if (checkmatch(wonder) >= 5){matchedPets.push({ name: 'Wonder', image: 'wonder.jpg', description: 'https://www.sfspca.org/sfspca-adoption/55109611/' });}
            if (checkmatch(poppy) >= 5){matchedPets.push({ name: 'Poppy', image: 'poppy.jpg', description: 'https://www.sfspca.org/sfspca-adoption/54742054/' });}
            if (checkmatch(patch) >= 5){matchedPets.push({ name: 'Patch', image: 'patch.jpg', description: 'https://www.sfspca.org/sfspca-adoption/55256620/' });}
            if (checkmatch(hershey) >= 5){matchedPets.push({ name: 'Hershey', image: 'hershey.jpg', description: 'https://www.sfspca.org/sfspca-adoption/55133866/' });}
            if (checkmatch(angel) >= 5){matchedPets.push({ name: 'Angel', image: 'angel.jpg', description: 'https://www.sfspca.org/sfspca-adoption/55416417/' });}
            if (checkmatch(dumpling) >= 5){matchedPets.push({ name: 'Dumpling', image: 'dumpling.jpg', description: 'https://www.sfspca.org/sfspca-adoption/55498384/' });}
            if (checkmatch(reina) >= 5){matchedPets.push({ name: 'Reina', image: 'reina.jpg', description: 'https://www.sfspca.org/sfspca-adoption/55000518/' });}
            if (checkmatch(walter) >= 5){matchedPets.push({ name: 'Walter', image: 'walter.jpg', description: 'https://www.sfspca.org/sfspca-adoption/55498409/' });}
            if (checkmatch(forest) >= 5){matchedPets.push({ name: 'Forest', image: 'forest.jpg', description: 'https://www.sfspca.org/sfspca-adoption/55603093/' });}
            if (checkmatch(diesel) >= 5){matchedPets.push({ name: 'Diesel', image: 'diesel.jpg', description: 'https://www.sfspca.org/sfspca-adoption/54172571/' });}
            if (checkmatch(ollie) >= 5){matchedPets.push({ name: 'Ollie', image: 'ollie.jpg', description: 'https://www.sfspca.org/sfspca-adoption/55644640/' });}
            if (checkmatch(cole) >= 5){matchedPets.push({ name: 'Cole', image: 'cole.jpg', description: 'https://www.sfspca.org/sfspca-adoption/55644680/' });}
            if (checkmatch(missy) >= 5){matchedPets.push({ name: 'Missy', image: 'missy.jpg', description: 'https://www.sfspca.org/sfspca-adoption/50407496/' });}
            if (checkmatch(rocket) >= 5){matchedPets.push({ name: 'Rocket', image: 'rocket.jpg', description: 'https://www.sfspca.org/sfspca-adoption/55109949/' });}
            if (checkmatch(rubyred) >= 5){matchedPets.push({ name: 'Ruby Red', image: 'rubyred.jpg', description: 'https://www.sfspca.org/sfspca-adoption/55671884/' });}

        
        
        
        
        }

        console.log(matchedPets.length)
        const matchedPetsContainer = document.getElementById('matchedPets');
            if (matchedPets.length==0){
                if(petchoice=="cat"){
                matchedPets.push({ name: 'Queen Quintessa', image: 'queenquintessa.jpg', description: 'https://www.sfspca.org/sfspca-adoption/55431244/' });
                }
                if(petchoice=="dog"){
                    matchedPets.push({ name: 'Wonder', image: 'https://www.sfspca.org/wp-content/uploads/2024/03/f18a7dfe-bc8c-4441-98e9-a005a7c5fbd5.jpg', description: 'https://www.sfspca.org/sfspca-adoption/55109511/' });
                }
            }else{

            matchedPets.forEach(pet => {
                const petDiv = document.createElement('div');
                petDiv.innerHTML = `
                    <img src="${pet.image}" alt="${pet.name}">
                    <h3>${pet.name}</h3>
                    <a class="linkbutton" onclick="window.open('${pet.description}', '_blank')">Meet ${pet.name}!</a>
                `;
                petDiv.style.marginBottom = '20px';
                matchedPetsContainer.appendChild(petDiv);
            });
        }
        
    }
    });

function checkmatch(list) {
    let matches=0
    for (let i = 0; i < useranswers.length; i++){
            if (list.includes(useranswers[i])){
                matches++
            }
    }
    return matches;
}

//automatic scrolling
const scrollButtons = document.querySelectorAll('.testbutton, .question input[type="radio"]');

scrollButtons.forEach(button => {
    button.addEventListener('click', () => {
        const parentElement = button.closest('.question');

        if (parentElement) {
            const nextQuestion = parentElement.nextElementSibling;

            if (nextQuestion) {
                const viewportHeight = window.innerHeight;
                const nextQuestionHeight = nextQuestion.offsetHeight;
                const scrollPosition = nextQuestion.offsetTop - (viewportHeight - nextQuestionHeight) / 2;

                window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
            }
        }
    });
});
