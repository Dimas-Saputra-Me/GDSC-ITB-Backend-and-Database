import React, { useEffect, useState } from 'react';
import './App.css';
import logo from './components/img/elogo.png'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';

import Login from './components/pages/Login';
import Register from './components/pages/Register';
import ProtectedRoutes from './protectedRoutes';

class NavBar extends React.Component {
  render() {
    return (
      <nav>
        <Link to='/' className='logo'>
          <img src={logo} />
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
            <Link to='/login' onClick={() => this.props.setUser({
              isLoggedIn: false,
              userId: null,
            })}>
              Log Out
            </Link>
          </li>
        </ul>
        <div className="search">
          <input type="text" placeholder="Find Your Favorite Movies" />
          <i className="fas fa-search"></i>
        </div>
      </nav>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <p>Kelompok 36</p>
        <p>GDSC ITB Task - Back-End Web </p>
      </footer>
    );
  }
}

function App() {
  const [wishlist, setWishlist] = useState([]);
  const [overview, setOverview] = useState(0);
  const [page, setPage] = useState('movies');
  const [movies, setMovies] = useState([]);
  const [user, setUser] = useState({
    isLoggedIn: false,
    userId: null,
  });
  const [userData, setUserData] = useState({});

  useEffect(() => {
    //get list movies from api
    axios.get('/api/movie')
      .then((movie) => {
        setMovies(movie.data);
      })
      .catch((err) => {
        console.error(err);
      })

    //get user data
    if (user.isLoggedIn === true) {
      axios.post('/api/user/get', { userId: user.userId })
        .then((userData) => {
          setUserData(userData.data);
          setWishlist(userData.data.wishlist);
        })
        .catch((err) => {
          console.error(err);
        })
    }

  }, [user.isLoggedIn, user.userId]);

  //update userData wishlist
  useEffect(() => {
    setUserData(prevState => ({
      ...prevState,
      wishlist: wishlist,
    }));
  }, [wishlist])

  //update user wishlist database
  useEffect(() => {
    axios.post('/api/user/update', userData)
      .then((res) => {

      })
      .catch((err) => {
        console.error(err);
      });
  }, [userData])


  const addToWishlist = (movie) => {
    setWishlist([...wishlist, movie]);
  };

  const removeFromWishlist = (movieRemove) => {
    setWishlist(wishlist.filter((movie) => movie !== movieRemove));
  };

  const toOverviewHandler = (movie) => {
    setOverview(movie);
    setPage('overview');
  }

  const fromOverviewHandler = (overviewRemove) => {
    navigateTo('movies');
    window.history.back()
  }

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const changeUser = (isLoggedIn, userId) => {
    setUser({
      isLoggedIn: isLoggedIn,
      userId: userId,
    });
  }

  const renderMovies = () => (
    <>
      <body>
        <NavBar setUser={changeUser} />
        <div className='welcome-content'>
          <h2>Hello and Welcome, {userData.username}</h2>
        </div>
        <div className="movies-heading">
          <h2>Movies</h2>
        </div>
        <section className="movie-list">
          {movies.map((movie) => (
            <div className="movies-box">
              <div className="movies-img" key={movie._id}>
                <Link to='/overview'>
                  <img alt="img" onClick={() => toOverviewHandler(movie._id)} className="img" src={movie.imageurl}></img>
                </Link>
              </div>
            </div>
          ))}
        </section>
        <Footer />
      </body>
    </>
  );

  function RenderOverview() {
    const overviewMovie = movies.find(movie => movie._id === overview)

    return (
      <body>
        <NavBar onClick={() => fromOverviewHandler(overview)} />
        <div className="overview-content">
          <div className="overview-header">
            <h5>Overview</h5>
          </div>
          <div className="overview-info">
            <div className="overview-container">
              <div className="overview-movie">
                <img alt="overview-poster" className="overview-poster" src={overviewMovie.imageurl}></img>
                <div className="about-movie">
                  <h3>{overviewMovie.title}</h3>
                  <p className="genre">{overviewMovie.genre}</p>
                  <p className="rating-num">Rating: {overviewMovie.rating}/10</p>
                  <h4>Description:</h4>
                  <p className="movie-desc">{overviewMovie.description}</p>
                  <div className="btn">
                    <a className="btn-back" onClick={() => fromOverviewHandler()}>Back</a>
                    <a className="imdb-page" target="_blank" href={overviewMovie.link} rel="noreferrer">IMDB Page</a>
                    <a className="add-to-wishlist" onClick={() => addToWishlist(overview)}>Add to Wishlist</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </body>
    )
  }

  const renderWishlist = () => (
    <>
      <body>
        <NavBar />
        <div className="wishlist">
          <div className="wishlist-content">
            <div className="wishlist-header">
              <h5>User's Wishlist</h5>
            </div>
            <div className="cards">
              {wishlist.length === 0 && <div className="empty-wishlist">You have no wishlist</div>}
              {wishlist.map((idx) => (
                <div className="wishlist-card">
                  <img src={movies.find(movie => movie._id === idx).imageurl}></img>
                  <div className="btn-remove">
                    <p onClick={() => removeFromWishlist(idx)}>Remove</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </body>
    </>
  );

  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<Login setUser={changeUser} />} />
          <Route path='/register' element={<Register />} />
          <Route element={ProtectedRoutes(user)}>
            <Route path='/' element={renderMovies()} />
            <Route path='/wishlist' element={renderWishlist()} />
            <Route path='/overview' element={<RenderOverview />} />
          </Route>

        </Routes>
      </Router>
    </>
  );
}

export default App;
