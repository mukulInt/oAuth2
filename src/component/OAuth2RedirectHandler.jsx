

// import React, { useEffect } from 'react';
// import { Redirect, useLocation } from 'react-router-dom';

// const OAuth2RedirectHandler = () => {
//   const location = useLocation();

//   const getUrlParameter = (name) => {
//     name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
//     var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
//     var results = regex.exec(location.search);
//     return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
//   };

//   useEffect(() => {
//     const token = getUrlParameter('token');
//     const error = getUrlParameter('error');

//     if (token) {
//       localStorage.setItem("accessToken", token);
//     }
//   }, []);

//   const token = getUrlParameter('token');
//   const error = getUrlParameter('error');
  
//   console.log("token" + token);

//   if (token) {
//     return (
//       <>
//       <Redirect
//       to={{
//         pathname: '/profile',
//         state: {
//           from: location.pathname,
//           error: error,
//         },
//       }}
//     />
//     </>
//     );
//   } else {
//     return (
//       // <Redirect
//       //   to={{
//       //     pathname: '/login',
//       //     state: {
//       //       from: location,
//       //       error: error,
//       //     },
//       //   }}
//       // />
//       <h1>login</h1>
//     );
//   }
// };

// export default OAuth2RedirectHandler;


import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const OAuth2RedirectHandler = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getUrlParameter = (name) => {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  };

  useEffect(() => {
    const token = getUrlParameter('token');
    const error = getUrlParameter('error');

    if (token) {
      localStorage.setItem("accessToken", token);
      navigate('/profile');
    }else{
      navigate('/');
    }
  }, []);

  const token = getUrlParameter('token');
  const error = getUrlParameter('error');

  console.log("token" + token);

  if (token) {
    return <h1>profile</h1>;
  } else {
    return <h1>login</h1>;
  }
};

export default OAuth2RedirectHandler;
