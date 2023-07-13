import React from 'react';

const Home = () => {
    
  return (
    <div>
        <h1>HOME</h1>
        <h1>Google</h1>
        <a href="http://localhost:8080/oauth2/authorize/google?redirect_uri=http://localhost:3000/oauth2/redirect" target="_blank" rel="noopener noreferrer">Google Login</a>
        <h1>meta</h1>
        <a href="http://localhost:8080/oauth2/authorize/google?redirect_uri=http://localhost:3000/oauth2/redirect" target="_blank" rel="noopener noreferrer">Meta Login</a>
        <h1>GitHub</h1>
        <a href="http://localhost:8080/oauth2/authorize/github?redirect_uri=http://localhost:3000/oauth2/redirect" target="_blank" rel="noopener noreferrer">Google Login</a>
    </div>
  )
}

export default Home;



