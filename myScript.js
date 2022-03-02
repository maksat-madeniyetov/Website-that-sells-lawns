class Card {
    constructor(imageSource, name, text) {
        this.imageSource = imageSource;
        this.name = name;
        this.text = text;
    }
}
database = [
    new Card("abdul.jpg", "Абдулмалик", "Качесвенно сделано!"),
    new Card("john.png", "John", "Мы всегда прислушиваемся к мнению своих покупателей, постоянно работаем над повышением уровня сервиса."),
    new Card("bill.jpg", "Bill Gates", "В следующем примере показано, как создать три столбца одинаковой ширины, которые будут расположены в один ряд на больших экранах."),
    new Card("jack.jpg", "Jack Ma", "Здесь уже срабатывает адаптивность, если экран будет меньше 576. Это особенности -sm. Точно также работает -md и -ls. Просто их адаптивность срабатывает при больших размерах."),
    new Card("elon.jpg", "Elon Mask", "Жақсы газондар!"),
    new Card("queen.jpg", "Queen Elizabeth II", "Бағасына сапасы сай! Өте жақсы!")
];
current = 1;

function goRight() {
    if (current === 4) {
        return;
    }
    let target = document.getElementById("id-karta");
    target.innerHTML = "";
    for (var i = current; i < current + 3; i++) {
        target.innerHTML +=
            `<div class="karta" style="margin-bottom: 40px;">
        <div class="karta-title">
            <img style="width: 64px; height: 64px; border-radius: 10px;" src="${database[i].imageSource}">
            <span style="margin-left: 20px;"><h5>${database[i].name}</h5></span>

        </div>
        <div class="feed-text" style="margin-top: 20px;">
            <p>${database[i].text}</p>
        </div>
    </div>`
    }
    current++;
    let second_target = document.getElementById("current-number");
    second_target.innerHTML = "";
    second_target.innerHTML = current;
}

function goLeft() {
    if (current === 1) {
        return;
    }
    let target = document.getElementById("id-karta");
    target.innerHTML = "";
    current--;
    for (var i = current - 1; i < current + 2; i++) {
        target.innerHTML +=
            `<div class="karta" style="margin-bottom: 40px;">
        <div class="karta-title">
            <img style="width: 64px; height: 64px; border-radius: 10px;" src="${database[i].imageSource}">
            <span style="margin-left: 20px;"><h5>${database[i].name}</h5></span>

        </div>
        <div class="feed-text" style="margin-top: 20px;">
            <p>${database[i].text}</p>
        </div>
    </div>`
    }
    let second_target = document.getElementById("current-number");
    second_target.innerHTML = "";
    second_target.innerHTML = current;
}

class News {
    constructor(functionName, imageSource, title, text, date) {
        this.functionName = functionName;
        this.imageSource = imageSource;
        this.title = title;
        this.text = text;
        this.date = date;
    }
}
database_news = [
    new News("firstNews()", "news-1.jpg", "G7 leaders are to commit to using all their resources in an effort to ensure the devastation caused by a pandemic like Covid-19 is never repeated.", "On the second day of their summit in Cornwall, they will issue a declaration that sets out a series of measures intended to achieve this. The aim is to slash the time needed to develop vaccines to under 100 days. On Friday, UK Prime Minister Boris Johnson opened the summit with a plea to tackle global inequality.", "Jun 10, 2021"),
    new News("secondNews()", "news-2.jpg", "Birthday Honours 2021: Covid vaccine heroes recognised by Queen", "Key figures from the UK's Covid vaccine programme, and community volunteers who helped during the pandemic, lead the Queen's Birthday Honours list. Oxford vaccine developer Prof Sarah Gilbert and the former chair of the UK vaccine taskforce Kate Bingham are both recognised with damehoods.", "Jun 11, 2021"),
    new News("thirdNews()", "news-3.jpg", "Coronavirus: Vaccine passports considered for use at big events", "The government is considering whether vaccine passports could be used at big events or if there is another coronavirus wave, the BBC understands. A review of the use of the certificates in England is expected to confirm on Monday they will not be compulsory. But a Whitehall source said they could have a role to play at large events, such as sports matches and concerts, and help prevent closures in a future wave of the pandemic this winter.", "Jun 12, 2021"),
    new News("fourthNews()", "news-4.jpg", "Call for urgent action to prevent learning disability deaths", "People with learning disabilities are still dying 25 years earlier than the rest of the population, a report has said. The Learning Disabilities Mortality Review (LeDeR) calls for urgent action to prevent more avoidable deaths. A quarter of learning disability deaths were caused by Covid in 2020, compared to 13% of other deaths.", "Jun 13, 2021"),
    new News("fifthNews()", "news-5.jpg", "G7 summit: Officer staying on ferry tests positive for Covid", "A dozen officers, who are supporting policing the G7 summit in Cornwall, are self-isolating following a positive Covid test. One person in their work bubble provided a positive lateral flow test on Friday morning. The team were being accommodated on a ferry in Falmouth, but have since been moved to a designated isolation area. Devon and Cornwall Police said the next stage is for those with positive results to undertake a PCR test. A spokesperson added: As part of our testing regime, during the early hours of 11 June one officer who is currently supporting G7 policing and accommodated on the ferry, has given a positive lateral flow test for COVID-19.", "Jun 14, 2021"),
    new News("sixthNews()", "news-6.jpg", "Andrew Dymock: Neo-Nazi guilty of terrorism charges", "A politics student who called for the extermination of Jewish people has been found guilty of 12 terrorism charges. Andrew Dymock, from Bath, established the banned right-wing groups System Resistance Network (SRN) and Sonnenkrieg Division. He also published an article stating that Jewish people were a cancer. The 24-year-old was convicted at the Old Bailey and is due to be sentenced on 24 June.", "Jun 15, 2021")
];

function firstNews() {
    let target = document.getElementById("newsMain");
    target.innerHTML = "";
    target.innerHTML += `
    <div class="container">
        <div class="row d-flex">
            <h4 class="title" style="font-size: 28px; color:#374759; font-weight: 600; margin-bottom: 50px;">G7 leaders are to commit to using all their resources in an effort to ensure the devastation caused by a pandemic like Covid-19 is never repeated.</h4>
        </div>
        <div class="row">
            <div class="col-md-10" style="font-size: 20px; color:#374759; font-weight: 200;">

                <p> <i class="far fa-clock"></i> Jun 10, 2021 </p>
                <br>
                <p>On the second day of their summit in Cornwall, they will issue a declaration that sets out a series of measures intended to achieve this. The aim is to slash the time needed to develop vaccines to under 100 days. On Friday, UK Prime Minister
                    Boris Johnson opened the summit with a plea to tackle global inequality.</p>

                <br>
                <img class="photoNews" src="news-1.jpg">

                <br><br><br><br>
                <p class="title" style="font-size: 25px; color:#374759; font-weight: 600; margin-bottom: 50px;">Читать также</p>
                <a onclick="secondNews()">
                    <div class="karta-news" style="margin-bottom: 50px;">
                        <div class="karta-title d-flex align-items-center">
                            <img style="width: 200px; height: 112px; border-radius: 5px;" src="news-2.jpg">
                        </div>
                        <div class="feed-text" style="margin-top: 20px; margin-left: 30px;">
                            <p>Birthday Honours 2021: Covid vaccine heroes recognised by Queen</p>
                            <p> <i class="far fa-clock"></i> Jun 11, 2021 </p>
                        </div>
                    </div>
                </a>

                <a onclick="thirdNews()">
                    <div class="karta-news" style="margin-bottom: 50px;">
                        <div class="karta-title d-flex align-items-center">
                            <img style="width: 200px; height: 112px; border-radius: 5px;" src="news-3.jpg">
                        </div>
                        <div class="feed-text" style="margin-top: 20px; margin-left: 30px;">
                            <p>Coronavirus: Vaccine passports considered for use at big events</p>
                            <p> <i class="far fa-clock"></i> Jun 12, 2021 </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
    `;
}

function secondNews() {
    let target = document.getElementById("newsMain");
    target.innerHTML = "";
    target.innerHTML += `
    <div class="container">
        <div class="row d-flex">
            <h4 class="title" style="font-size: 28px; color:#374759; font-weight: 600; margin-bottom: 50px;">${database_news[1].title}</h4>
        </div>
        <div class="row">
            <div class="col-md-10" style="font-size: 20px; color:#374759; font-weight: 200;">

                <p> <i class="far fa-clock"></i> ${database_news[1].date} </p>
                <br>
                <p>${database_news[1].text}</p>

                <br>
                <img class="photoNews" src="${database_news[1].imageSource}">

                <br><br><br><br>
                <p class="title" style="font-size: 25px; color:#374759; font-weight: 600; margin-bottom: 50px;">Читать также</p>
                <a onclick="${database_news[0].functionName}">
                    <div class="karta-news" style="margin-bottom: 50px;">
                        <div class="karta-title d-flex align-items-center">
                            <img style="width: 200px; height: 112px; border-radius: 5px;" src="${database_news[0].imageSource}">
                        </div>
                        <div class="feed-text" style="margin-top: 20px; margin-left: 30px;">
                            <p>${database_news[0].title}</p>
                            <p> <i class="far fa-clock"></i> ${database_news[0].date} </p>
                        </div>
                    </div>
                </a>

                <a onclick="${database_news[2].functionName}">
                    <div class="karta-news" style="margin-bottom: 50px;">
                        <div class="karta-title d-flex align-items-center">
                            <img style="width: 200px; height: 112px; border-radius: 5px;" src="${database_news[2].imageSource}">
                        </div>
                        <div class="feed-text" style="margin-top: 20px; margin-left: 30px;">
                            <p>${database_news[2].title}</p>
                            <p> <i class="far fa-clock"></i> ${database_news[2].date} </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
    `;
}

function thirdNews() {
    let target = document.getElementById("newsMain");
    target.innerHTML = "";
    target.innerHTML += `
    <div class="container">
        <div class="row d-flex">
            <h4 class="title" style="font-size: 28px; color:#374759; font-weight: 600; margin-bottom: 50px;">${database_news[2].title}</h4>
        </div>
        <div class="row">
            <div class="col-md-10" style="font-size: 20px; color:#374759; font-weight: 200;">

                <p> <i class="far fa-clock"></i> ${database_news[2].date} </p>
                <br>
                <p>${database_news[2].text}</p>

                <br>
                <img class="photoNews" src="${database_news[2].imageSource}">

                <br><br><br><br>
                <p class="title" style="font-size: 25px; color:#374759; font-weight: 600; margin-bottom: 50px;">Читать также</p>
                <a onclick="${database_news[0].functionName}">
                    <div class="karta-news" style="margin-bottom: 50px;">
                        <div class="karta-title d-flex align-items-center">
                            <img style="width: 200px; height: 112px; border-radius: 5px;" src="${database_news[0].imageSource}">
                        </div>
                        <div class="feed-text" style="margin-top: 20px; margin-left: 30px;">
                            <p>${database_news[0].title}</p>
                            <p> <i class="far fa-clock"></i> ${database_news[0].date} </p>
                        </div>
                    </div>
                </a>

                <a onclick="${database_news[1].functionName}">
                    <div class="karta-news" style="margin-bottom: 50px;">
                        <div class="karta-title d-flex align-items-center">
                            <img style="width: 200px; height: 112px; border-radius: 5px;" src="${database_news[1].imageSource}">
                        </div>
                        <div class="feed-text" style="margin-top: 20px; margin-left: 30px;">
                            <p>${database_news[1].title}</p>
                            <p> <i class="far fa-clock"></i> ${database_news[1].date} </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
    `;
}

function secondMainPage() {
    let target = document.getElementById("newsMain");
    target.innerHTML = "";
    target.innerHTML += `
    <div class="container">
            <div class="row d-flex justify-content-center">
                <h4 class="title" style="font-size: 28px; color:#374759; font-weight: 600; margin-bottom: 50px;">НОВОСТИ</h4>
            </div>
            <div class="row d-flex justify-content-center">
                <div class="col-md-10" id="id-news">
                    <a onclick="${database_news[3].functionName}">
                        <div class="karta-news" style="margin-bottom: 50px;">
                            <div class="karta-title d-flex align-items-center">
                                <img style="width: 200px; height: 112px; border-radius: 5px;" src="${database_news[3].imageSource}">
                            </div>
                            <div class="feed-text" style="margin-top: 20px; margin-left: 30px;">
                                <p>${database_news[3].title}</p>
                                <p> <i class="far fa-clock"></i> ${database_news[3].date} </p>
                            </div>
                        </div>
                    </a>

                    <a onclick="${database_news[4].functionName}">
                        <div class="karta-news" style="margin-bottom: 50px;">
                            <div class="karta-title d-flex align-items-center">
                                <img style="width: 200px; height: 112px; border-radius: 5px;" src="${database_news[4].imageSource}">
                            </div>
                            <div class="feed-text" style="margin-top: 20px; margin-left: 30px;">
                                <p>${database_news[4].title}</p>
                                <p> <i class="far fa-clock"></i> ${database_news[4].date} </p>
                            </div>
                        </div>
                    </a>

                    <a onclick="${database_news[5].functionName}">
                        <div class="karta-news" style="margin-bottom: 50px;">
                            <div class="karta-title d-flex align-items-center">
                                <img style="width: 200px; height: 112px; border-radius: 5px;" src="${database_news[5].imageSource}">
                            </div>
                            <div class="feed-text" style="margin-top: 20px; margin-left: 30px;">
                                <p>${database_news[5].title}</p>
                                <p> <i class="far fa-clock"></i> ${database_news[5].date} </p>
                            </div>
                        </div>
                    </a>

                    <div class="row" style="display: flex; justify-content: center;">
                        <a href="news.html"><button type="button" class="btn btn-outline-success" style="border-radius: 50%;">1</button></a>
                        <button type="button" class="btn btn-success" style="border-radius: 50%; margin-left: 30px;">2</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function fourthNews() {
    let target = document.getElementById("newsMain");
    target.innerHTML = "";
    target.innerHTML += `
    <div class="container">
        <div class="row d-flex">
            <h4 class="title" style="font-size: 28px; color:#374759; font-weight: 600; margin-bottom: 50px;">${database_news[3].title}</h4>
        </div>
        <div class="row">
            <div class="col-md-10" style="font-size: 20px; color:#374759; font-weight: 200;">

                <p> <i class="far fa-clock"></i> ${database_news[3].date} </p>
                <br>
                <p>${database_news[3].text}</p>

                <br>
                <img class="photoNews" src="${database_news[3].imageSource}">

                <br><br><br><br>
                <p class="title" style="font-size: 25px; color:#374759; font-weight: 600; margin-bottom: 50px;">Читать также</p>
                <a onclick="${database_news[4].functionName}">
                    <div class="karta-news" style="margin-bottom: 50px;">
                        <div class="karta-title d-flex align-items-center">
                            <img style="width: 200px; height: 112px; border-radius: 5px;" src="${database_news[4].imageSource}">
                        </div>
                        <div class="feed-text" style="margin-top: 20px; margin-left: 30px;">
                            <p>${database_news[4].title}</p>
                            <p> <i class="far fa-clock"></i> ${database_news[4].date} </p>
                        </div>
                    </div>
                </a>

                <a onclick="${database_news[5].functionName}">
                    <div class="karta-news" style="margin-bottom: 50px;">
                        <div class="karta-title d-flex align-items-center">
                            <img style="width: 200px; height: 112px; border-radius: 5px;" src="${database_news[5].imageSource}">
                        </div>
                        <div class="feed-text" style="margin-top: 20px; margin-left: 30px;">
                            <p>${database_news[5].title}</p>
                            <p> <i class="far fa-clock"></i> ${database_news[5].date} </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
    `;
}

function fifthNews() {
    let target = document.getElementById("newsMain");
    target.innerHTML = "";
    target.innerHTML += `
    <div class="container">
        <div class="row d-flex">
            <h4 class="title" style="font-size: 28px; color:#374759; font-weight: 600; margin-bottom: 50px;">${database_news[4].title}</h4>
        </div>
        <div class="row">
            <div class="col-md-10" style="font-size: 20px; color:#374759; font-weight: 200;">

                <p> <i class="far fa-clock"></i> ${database_news[4].date} </p>
                <br>
                <p>${database_news[4].text}</p>

                <br>
                <img class="photoNews" src="${database_news[4].imageSource}">

                <br><br><br><br>
                <p class="title" style="font-size: 25px; color:#374759; font-weight: 600; margin-bottom: 50px;">Читать также</p>
                <a onclick="${database_news[3].functionName}">
                    <div class="karta-news" style="margin-bottom: 50px;">
                        <div class="karta-title d-flex align-items-center">
                            <img style="width: 200px; height: 112px; border-radius: 5px;" src="${database_news[3].imageSource}">
                        </div>
                        <div class="feed-text" style="margin-top: 20px; margin-left: 30px;">
                            <p>${database_news[3].title}</p>
                            <p> <i class="far fa-clock"></i> ${database_news[3].date} </p>
                        </div>
                    </div>
                </a>

                <a onclick="${database_news[5].functionName}">
                    <div class="karta-news" style="margin-bottom: 50px;">
                        <div class="karta-title d-flex align-items-center">
                            <img style="width: 200px; height: 112px; border-radius: 5px;" src="${database_news[5].imageSource}">
                        </div>
                        <div class="feed-text" style="margin-top: 20px; margin-left: 30px;">
                            <p>${database_news[5].title}</p>
                            <p> <i class="far fa-clock"></i> ${database_news[5].date} </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
    `;
}

function sixthNews() {
    let target = document.getElementById("newsMain");
    target.innerHTML = "";
    target.innerHTML += `
    <div class="container">
        <div class="row d-flex">
            <h4 class="title" style="font-size: 28px; color:#374759; font-weight: 600; margin-bottom: 50px;">${database_news[2].title}</h4>
        </div>
        <div class="row">
            <div class="col-md-10" style="font-size: 20px; color:#374759; font-weight: 200;">

                <p> <i class="far fa-clock"></i> ${database_news[5].date} </p>
                <br>
                <p>${database_news[5].text}</p>

                <br>
                <img class="photoNews" src="${database_news[5].imageSource}">

                <br><br><br><br>
                <p class="title" style="font-size: 25px; color:#374759; font-weight: 600; margin-bottom: 50px;">Читать также</p>
                <a onclick="${database_news[5].functionName}">
                    <div class="karta-news" style="margin-bottom: 50px;">
                        <div class="karta-title d-flex align-items-center">
                            <img style="width: 200px; height: 112px; border-radius: 5px;" src="${database_news[3].imageSource}">
                        </div>
                        <div class="feed-text" style="margin-top: 20px; margin-left: 30px;">
                            <p>${database_news[3].title}</p>
                            <p> <i class="far fa-clock"></i> ${database_news[3].date} </p>
                        </div>
                    </div>
                </a>

                <a onclick="${database_news[4].functionName}">
                    <div class="karta-news" style="margin-bottom: 50px;">
                        <div class="karta-title d-flex align-items-center">
                            <img style="width: 200px; height: 112px; border-radius: 5px;" src="${database_news[4].imageSource}">
                        </div>
                        <div class="feed-text" style="margin-top: 20px; margin-left: 30px;">
                            <p>${database_news[4].title}</p>
                            <p> <i class="far fa-clock"></i> ${database_news[4].date} </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
    `;
}