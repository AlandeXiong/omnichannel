# C2ToOmnichannelCopilotSSO

## Project Overview
This project is a Node.js + Express backend service that provides a JWT token generation API for SSO (Single Sign-On) integration with the Omnichannel Live Chat Widget.

## Directory Structure
```
├── app.js                  # Main application entry point
├── routes/
│   ├── privatekey.js       # Route for generating JWT
│   └── publickey.js        # Route for public key
├── views/
│   └── chatwidget.html     # Frontend page
├── keys/
│   └── private.key         # JWT signing private key (PEM format)
├── package.json
└── README.md
```

## Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Prepare the private key**
   - Place your `private.key` (PEM format) in the `keys/` directory.

3. **Start the server**
   ```bash
   node app.js
   ```
   The server listens on port 900 by default.

4. **Access the frontend**
   Open your browser and go to [http://localhost:900](http://localhost:900)

5. **Get a JWT token**
   Visit [http://localhost:900/privatekey](http://localhost:900/privatekey) to get a JWT.

## Notes

- Do not commit `keys/private.key` or `node_modules/` to your Git repository.
- To modify the JWT payload, edit `routes/privatekey.js`.

## Dependencies
- express
- jsonwebtoken
- fs

## License
MIT