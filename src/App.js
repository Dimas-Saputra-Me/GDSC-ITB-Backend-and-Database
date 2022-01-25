import { useState } from 'react';
import './App.css';
import logo from './components/img/elogo.png'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import Login from './components/pages/Login';
import Register from './components/pages/Register';

function App() {
  const [wishlist, setWishlist] = useState([]);
  const [overview, setOverview] = useState([]);
  const [page, setPage] = useState('movies');
  const [movies] = useState (
    [
      {
        name: "Kin (2018)",
        img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/oPE5GXHaTlu5eRcd4USuOX3A1mf.jpg",
        genre: "Action",
        rating: "5.8",
        desc: "Co-directors Jonathan Baker and Josh Baker's sci-fi action thriller features James Franco, Zoe Kravitz, and Dennis Quaid. A young boy (Myles Truitt) finds a powerful otherworldly weapon, which he uses to save his older adoptive brother (Jack Reynor) from a crew of thugs. Before long, the two of them are also pursued by federal agents and mysterious mercenaries aiming to reclaim their asset.",
        link: "https://www.imdb.com/title/tt6017942/?ref_=nv_sr_srsg_0"
      },
      {
          name: "Peninsula (2020)",
          img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/eeqvAzCccAZOhU3RfbvHB3s44S6.jpg",
          genre: "Action, Horror, Thriller",
          rating: "5.5",
          desc: "Peninsula takes place four years after the zombie outbreak in Train to Busan. The Korean peninsula is devastated and Jung Seok, a former soldier who has managed to escape overseas, is given a mission to go back and unexpectedly meets survivors.",
          link: "https://www.imdb.com/title/tt8850222/?ref_=nv_sr_srsg_0"
      },
      {
          name: "Inception (2010)",
          img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
          genre: "Action, Adventure, Sci-Fi",
          rating: "8.8",
          desc: "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable. Cobb's rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Now Cobb is being offered a chance at redemption. One last job could give him his life back but only if he can accomplish the impossible, inception. Instead of the perfect heist, Cobb and his team of specialists have to pull off the reverse: their task is not to steal an idea, but to plant one. If they succeed, it could be the perfect crime. But no amount of careful planning or expertise can prepare the team for the dangerous enemy that seems to predict their every move. An enemy that only Cobb could have seen coming.",
          link: "https://www.imdb.com/title/tt1375666/?ref_=nv_sr_srsg_0"
      },
      {
          name: "Iron Man 3 (2013)",
          img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qhPtAc1TKbMPqNvcdXSOn9Bn7hZ.jpg",
          genre: "Action, Adventure, Sci-Fi",
          rating: "7.1",
          desc: "Marvel's Iron Man 3 pits brash-but-brilliant industrialist Tony Stark/Iron Man against an enemy whose reach knows no bounds. When Stark finds his personal world destroyed at his enemy's hands, he embarks on a harrowing quest to find those responsible. This journey, at every turn, will test his mettle. With his back against the wall, Stark is left to survive by his own devices, relying on his ingenuity and instincts to protect those closest to him. As he fights his way back, Stark discovers the answer to the question that has secretly haunted him: does the man make the suit or does the suit make the man?",
          link: "https://www.imdb.com/title/tt1300854/?ref_=nv_sr_srsg_0"
      },
      {
          name: "Venom (2018)",
          img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg",
          genre: "Action, Adventure, Sci-Fi",
          rating: "6.7",
          desc: "After a faulty interview with the Life Foundation ruins his career, former reporter Eddie Brock's life is in pieces. Six months later, he comes across the Life Foundation again, and he comes into contact with an alien symbiote and becomes Venom, a parasitic antihero.",
          link: "https://www.imdb.com/title/tt1270797/?ref_=nv_sr_srsg_3"
      },
      {
          name: "Aquaman",
          img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xLPffWMhMj1l50ND3KchMjYoKmE.jpg",
          genre: "Action, Adventure, Fantasy",
          rating: "6.9",
          desc: "Born upon the shores of the surface world, Arthur Curry (Jason Momoa) discovers that he is only half human, with the other half of his blood being of Atlanteean descent, thus making him the rightful heir to the throne of the undersea kingdom of Atlantis. However, Arthur learns that Atlantis is being ruled by his malicious half-brother Orm (Patrick Wilson), who seeks to unite the seven underwater kingdoms and wage war upon the surface. With aid from Nuidis Vulko (Willem Dafoe) and the gorgeous Mera (Amber Heard), Arthur must discover the full potential of his true destiny and become Aquaman in order to save Atlantis and the surface from Orm's evil plot.",
          link: "https://www.imdb.com/title/tt1477834/?ref_=nv_sr_srsg_0"
      },
      {
          name: "John Wick Chapter 3 - Parabellum (2019)",
          img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg",
          genre: "Action, Crime, Thriller",
          rating: "7.4",
          desc: "In this third installment of the adrenaline-fueled action franchise, skilled assassin John Wick (Keanu Reeves) returns with a $14 million price tag on his head and an army of bounty-hunting killers on his trail. After killing a member of the shadowy international assassin's guild, the High Table, John Wick is excommunicado, but the world's most ruthless hit men and women await his every turn.",
          link: "https://www.imdb.com/title/tt6146586/?ref_=nv_sr_srsg_0"
      },
      {
          name: "Fantastic Beast (2016)",
          img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/h6NYfVUyM6CDURtZSnBpz647Ldd.jpg",
          genre: "Action, Family, Fantasy",
          rating: "7.3",
          desc: "In mid-1920s New York, Newt Scamander, a British young activist wizard, arrives in the city, holding a mysterious leather suitcase that shelters diverse and magical creatures that exist among us. Amid an already fragile equilibrium of secrecy, and the increasing disasters ascribed to the dark wizard, Gellert Grindelwald, Newt's precious suitcase goes missing, and to make matters worse, several creatures manage to escape. Before long, this unforeseen complication catches Senior Auror Percival Graves' attention who targets Newt, against the backdrop of an invisible, devastating, and utterly unpredictable menace that still wreaks havoc on 5th Avenue. In the end, is there a hidden agenda behind Graves' intentions? Moreover, what will happen to the remaining fantastic beasts that are still on the loose?",
          link: "https://www.imdb.com/title/tt3183660/?ref_=nv_sr_srsg_4"
      },
      {
          name: "Rogue One: A Star Wars Story (2016)",
          img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5jX3p0apUG5bkMHtnKZch0xpkBS.jpg",
          genre: "Action, Adventure, Sci-Fi",
          rating: "7.8",
          desc: "All looks lost for the Rebellion against the Empire as they learn of the existence of a new super weapon, the Death Star. Once a possible weakness in its construction is uncovered, the Rebel Alliance must set out on a desperate mission to steal the plans for the Death Star. The future of the entire galaxy now rests upon its success",
          link: "https://www.imdb.com/title/tt3748528/?ref_=nv_sr_srsg_1"
      },
      {
          name: "Star Trek: Into Darkness (2013)",
          img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7XrRkhMa9lQ71RszzSyVrJVvhyS.jpg",
          genre: "Action, Adventure, Sci-Fi",
          rating: "7.7",
          desc: "When the USS Enterprise crew is called back home, they find an unstoppable force of terror from within their own organization has detonated the fleet and everything it stands for, leaving our world in a state of crisis. With a personal score to settle, Captain Kirk leads a manhunt to a war-zone world to capture a one-man weapon of mass destruction. As our space heroes are propelled into an epic chess game of life and death, love will be challenged, friendships will be torn apart, and sacrifices must be made for the only family Kirk has left: his crew.",
          link: "https://www.imdb.com/title/tt1408101/?ref_=nv_sr_srsg_0"
      },
      {
          name: "Avengers: Endgame (2019)",
          img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
          genre: "Adventure, Science Fiction, Action",
          rating: "8.4",
          desc: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face...",
          link: "https://www.imdb.com/title/tt4154796/?ref_=nv_sr_srsg_0"
      },
      {
          name: "No Time to Die (2021)",
          img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/iUgygt3fscRoKWCV1d0C7FbM9TP.jpg",
          genre: "Adventure, Action, Thriller",
          rating: "7.5",
          desc: "Bond has left active service and is enjoying a tranquil life in Jamaica. His peace is short-lived when his old friend Felix Leiter from the CIA turns up asking for help. The mission to rescue a kidnapped scientist turns out to be far more treacherous than expected, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.",
          link: "https://www.imdb.com/title/tt2382320/?ref_=nv_sr_srsg_0"
      },
      {
          name: "Parasite (2019)",
          img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/abiFPU6rBGvsIf0QvDESvbij8pF.jpg",
          genre: "Comedy, Thriller, Drama",
          rating: "8.6",
          desc: "The Kims - mother and father Chung-sook and Ki-taek, and their young adult offspring, son Ki-woo and daughter Ki-jung - are a poor family living in a shabby and cramped half basement apartment in a busy lower working class commercial district of Seoul. Without even knowing it, they, especially Mr. and Mrs. Kim, literally smell of poverty. Often as a collective, they perpetrate minor scams to get by, and even when they have jobs, they do the minimum work required. Ki-woo is the one who has dreams of getting out of poverty by one day going to university. Despite not having that university education, Ki-woo is chosen by his university student friend Min, who is leaving to go to school, to take over his tutoring job to Park Da-hye, who Min plans to date once he returns to Seoul and she herself is in university.",
          link: "https://www.imdb.com/title/tt6751668/?ref_=nv_sr_srsg_0"
      },
      {
          name: "Joker (2019)",
          img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/nkpfLnkKjbiqgxPnuzf6gCSiJN1.jpg",
          genre: "Crime, Thriller, Drama",
          rating: "8.4",
          desc: "Arthur Fleck works as a clown and is an aspiring stand-up comic. He has mental health issues, part of which involves uncontrollable laughter. Times are tough and, due to his issues and occupation, Arthur has an even worse time than most. Over time these issues bear down on him, shaping his actions, making him ultimately take on the persona he is more known as...Joker.",
          link: "https://www.imdb.com/title/tt7286456/?ref_=nv_sr_srsg_0"
      },
      {
          name: "Black Widow (2021)",
          img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg",
          genre: "Action, Adventure, Science Fiction",
          rating: "6.7",
          desc: "In Marvel Studios' action-packed spy thriller \"Black Widow,\" Natasha Romanoff aka Black Widow confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger",
          link: "https://www.imdb.com/title/tt3480822/?ref_=nv_sr_srsg_0"
      }
    ]
  );

  const addToWishlist = (movie) => {
    setWishlist([...wishlist, {...movie}])
  };

  const removeFromWishlist = (movieRemove) => {
    setWishlist(wishlist.filter((movie) => movie !== movieRemove));
  };

  const toOverviewHandler = (movie) => {
    setOverview([...overview, {...movie}]);
    setPage('overview');
  }

  const fromOverviewHandler = (overviewRemove) => {
    setOverview(overview.filter((movie) => movie !== overviewRemove));
    navigateTo('movies');
  }

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const renderMovies = () => (
    <>
    <body>
      <nav>
        <Link to='/' className='logo'>
          <img src={logo}/>
        </Link>
        <ul className="menu">
          <li>
            <Link to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/wishlist'>
              Wishlist
            </Link>
          </li>
          <li>
            <Link to='/login'>
              Login
            </Link>
          </li>
          <li>
            <Link to='/register'>
              Register
            </Link>
          </li>
        </ul>
        <div className="search">
          <input type="text" placeholder="Find Your Favorite Movies"/>
          <i className="fas fa-search"></i>
        </div>
      </nav>
      <div className="movies-heading">
        <h2>Movies</h2>
      </div>
      <section className="movie-list">
        {movies.map((movie, idx) => (
          <div className="movies-box">
            <div className="movies-img" key={idx}>
              <Link to='/overview'>
                <img onClick={() => toOverviewHandler(movie)} className="img" src={movie.img}></img>
              </Link>
            </div>
          </div>
        ))}
      </section>
      <footer>
        <p>Kelompok 36</p>
        <p>GDSC ITB Task - Back-End Web </p>
      </footer>
    </body>
    </>
  );

  const renderOverview = () => {
    <>
    <body>
    <nav>
        <Link to='/' className='logo'>
          <img src={logo}/>
        </Link>
        <ul className="menu">
          <li>
            <Link to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/wishlist'>
              Wishlist
            </Link>
          </li>
          <li>
            <Link to='/login'>
              Login
            </Link>
          </li>
          <li>
            <Link to='/register'>
              Register
            </Link>
          </li>
        </ul>
        <div className="search">
          <input type="text" placeholder="Find Your Favorite Movies"/>
          <i className="fas fa-search"></i>
        </div>
      </nav>
      <div className="overview-content">
        <div className="overview-header">
          <h5>Overview</h5>
        </div>
        <div className="overview-info">
          {overview.map((movie) => (
            <div className="overview-container">
              <div className="overview-movie">
                <img className="overview-poster" src={movie.img}></img>
                
                <div className="about-movie">
                  <h3>{movie.name}</h3>
                  <p className="genre">{movie.genre}</p>
                  <p className="rating-num">Rating: {movie.rating}/10</p>
                  <h4>Description:</h4>
                  <p className="movie-desc">{movie.desc}</p>
                  <div className="btn">
                    <a className="btn-back" onClick={() => fromOverviewHandler(movie)}>Back</a>
                    <a className="imdb-page" target="_blank" href={movie.link} rel="noreferrer">IMDB Page</a>
                    <a className="add-to-wishlist" onClick={() => addToWishlist(movie)}>Add to Wishlist</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer>
        <p>Kelompok 36</p>
        <p>GDSC ITB Task - Back-End Web </p>
      </footer>
    </body>
    </>
};

  const renderWishlist = () => (
    <>
    <body>
      <nav>
        <Link to='/' className='logo'>
          <img src={logo}/>
        </Link>
        <ul className="menu">
          <li>
            <Link to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/wishlist'>
              Wishlist
            </Link>
          </li>
          <li>
            <Link to='/login'>
              Login
            </Link>
          </li>
          <li>
            <Link to='/register'>
              Register
            </Link>
          </li>
        </ul>
        <div className="search">
          <input type="text" placeholder="Find Your Favorite Movies"/>
          <i className="fas fa-search"></i>
        </div>
      </nav>
      <div className="wishlist">
        <div className="wishlist-content">
          <div className="wishlist-header">
            <h5>Wishlist</h5>
          </div>
          <div className="cards">
            {movies.map((movie) => (
              <div className="wishlist-card">
                <img src={movie.img}></img>
                <div className="btn-remove">
                  <p onClick={() => removeFromWishlist(movie)}>Remove</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer>
        <p>Kelompok 36</p>
        <p>GDSC ITB Task - Back-End Web </p>
      </footer>
    </body>
    </>
  );

  return (
    <>
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={renderMovies()} />
        <Route path='/wishlist' element={renderWishlist()} />
        <Route path='/overview' element={renderOverview()} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
