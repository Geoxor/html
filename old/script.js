
// define main song array
let song =  new Array();

// define each song
song[1] = new Array (
    "assets/virtual.webp", 
    "https://cdn.discordapp.com/attachments/737013079899897880/739178466091597835/virtual.png", 
    "Virtual",
    "Geoxor", 
    "radial-gradient(circle at top left,#f79afb, #a5d0fb)", 
    "Virtual is a tune about a girl lost in an unknown dimension. She asks a virtual entity she found where she is and if she's in reality or in a dream. As she explores the dimension, her surroundings change based on her emotions.", 
    "assets/music/Geoxor - Virtual.mp3",
)
song[2] = new Array (
    "assets/euphoria.webp", 
    "https://cdn.discordapp.com/attachments/737013079899897880/739178334667145236/euphoria.png", 
    "Euphoria", 
    "Geoxor", 
    "radial-gradient(circle at top left,#b9dcf8, #ffbadd)", 
    "The original idea behind Euphoria was to have a very saturated bass with vocal chops, which started with the intro climax, the vocal chops, and the bass. Everything else was designed after them, and this song soon became one of my favorite ones that I've produced.", 
    "assets/music/Geoxor - Euphoria.mp3",
)
song[3] = new Array (
    "assets/luciddream.webp", 
    "https://cdn.discordapp.com/attachments/737013079899897880/739178247446855820/luciddream.png", 
    "Lucid Dream", 
    "Panda Eyes & Geoxor", 
    "radial-gradient(circle at top left,#fdc1f6, #fe98df)", 
    "Panda Eyes contacted me one day and asked me to make a tune together, 1 week~ later he sent me this melody, I worked on the vocal chops and the initial drop, which then in the end he edited once more and we finally released it, one of my proudest collabs yet.", 
    "assets/music/Panda Eyes & Geoxor - Lucid Dream.mp3",
)
song[4] = new Array (
    "assets/shaii.webp", 
    "https://cdn.discordapp.com/attachments/737013079899897880/739178579589595136/shaii.png", 
    "Shaii", 
    "Geoxor", 
    "radial-gradient(circle at top left,#fe04a8, #2dc9ec)", 
    "One night I woke up at 3AM with the idea of singing like a flute with my voice and distorting the shit out of the sound, it just so happened that I had Ariimaw's Shaii oc as my wallpaper on my desktop, and that inspired me to create this tune overnight.", 
    "assets/music/Geoxor - Shaii.mp3",
)
song[5] = new Array (
    "assets/twilight.webp", 
    "https://cdn.discordapp.com/attachments/737013079899897880/739178509121093632/twilight.png", 
    "Twilight", 
    "Geoxor", 
    "radial-gradient(circle at top left,#fc69db, #a874e0)", 
    "This tune went better than I anticipated, when I introduced the violins the whole wip changed around for me, and I got inspired to add a euphoria style bass again with vocal chops but this time a lot faster at 174BPM.", 
    "assets/music/Geoxor - Twilight.mp3",
)
song[6] = new Array (
    "assets/irreversible.webp", 
    "https://cdn.discordapp.com/attachments/737013079899897880/739178266773946490/irreversible.png", 
    "Irreversible", 
    "Geoxor", 
    "radial-gradient(circle at top left,#ff008d, #3c3b3c)", 
    "Irreversible EP", 
    "assets/music/Geoxor - Irreversible (EP).zip",
)
song[7] = new Array (
    "assets/stardust.webp", 
    "https://cdn.discordapp.com/attachments/737013079899897880/739178602985422879/stardust.png", 
    "Stardust", 
    "Geoxor", 
    "radial-gradient(circle at top left,#ca30b5, #5964c3)", 
    "All of my melodic tunes after my style change in one, accompanied with Ariimaw's amazing cover.", 
    "./assets/music/Geoxor - Stardust (Album).zip",
)
song[8] = new Array (
    "assets/moneko.webp", 
    "https://cdn.discordapp.com/attachments/737013079899897880/739178336814760096/moneko.png", 
    "Moneko", 
    "Geoxor", 
    "radial-gradient(circle at top left,#3902d0, #bf02cc)",
    "Inspired by Tisoki, this tune aims to be like future bass but in a more modern, melodic and heavy way than most traditional future bass.", 
    "assets/music/Geoxor - Moneko.mp3",
)
song[9] = new Array (
    "assets/sakura.webp", 
    "https://cdn.discordapp.com/attachments/737013079899897880/739178540993478706/sakura.png", 
    "Sakura", 
    "Geoxor & Canonblade", 
    "radial-gradient(circle at top left,#fdc1e3, #c2d2fb)",
    "Coindently the day of release happened to be my birthday haha!, anyway hope you guys enjoy this collab with canon, was pretty fun to make.", 
    "assets/music/Geoxor & Canonblade - Sakura.mp3",
)
song[10] = new Array (
    "assets/nana.webp", 
    "https://cdn.discordapp.com/attachments/737013079899897880/739178529727447161/nana.png", 
    "Nana", 
    "Geoxor", 
    "radial-gradient(circle at top left,#be5a63, #310628)",
    "This tune was one of my biggest bangers, Knife Party played it on Ultra 2019, it was the first time one of my songs has been played live, always loved combining angry basses and vocal chops", 
    "assets/music/Geoxor - Nana.mp3",
)
song[11] = new Array (
    "assets/faerie.webp", 
    "https://cdn.discordapp.com/attachments/553776591910600714/776821021872750592/Faerie_Cover.png", 
    "Faerie", 
    "Geoxor", 
    "radial-gradient(circle at top left,#f300aa, #5d5df3)",
    "Lately I've been running into a lot of issues with my computer blue screening, power outages, and file corruptions, I lost the project file for this tune alongside many others, but since everyone wanted it to be out, I decided to release it, hope you enjoy!", 
    "https://cdn.discordapp.com/attachments/553776591910600714/776830165706604624/Geoxor_-_Faerie.mp3",
)

// change content on download box
$(function() {

    // figure out the cover im clicking on
    $(".cover").on('click', function(){
        let activeCover = $(this).attr('data-coverID');
        console.log(activeCover);

        // change content
        $('.cover-preview a img').attr("src",song[activeCover][0]);
        $('.cover').attr("href", song[activeCover][1])
        $('.big').text(song[activeCover][2]);
        $('.smalls').text(song[activeCover][3]);
        $('.new, .type, .buy').css("background", song[activeCover][4]);
        $('.description .text').text(song[activeCover][5]);
        $('.buy-price a').attr("href",song[activeCover][6]);

        // animations
        $('.download').fadeIn(200);
        $('.blur').css("filter","blur(6px)")
        $('.new, .umairih-credit').css("display", "none");
    });
});

$(document).ready(function() {
    switch (window.location.hash.substring(1)) {
        case "":
            console.log("home");
            $('.welcome, .welcome-box').css("display", "flex");
            break;
        case "faq":
            console.log(window.location.hash.substring(1));
            $('.faq').css("display", "flex");
            break;
        case "biography":
            console.log(window.location.hash.substring(1));
            $('.biography').css("display", "flex");
            break;
        case "downloads":
            console.log(window.location.hash.substring(1));
            $('.music-container').css("display", "flex");
            break;
    };
});

