import React from 'react';

export default function head(store, headers) {
  return (
    <head>
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet" />
      <meta name="logged_in" content={headers['logged-in']} />
    </head>
  );
}
