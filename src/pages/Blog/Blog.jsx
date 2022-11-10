import React from "react";
import { Helmet } from "react-helmet";
import Container from "../../shared/Container/Container";

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog | Consult & Grow</title>
      </Helmet>
      <Container>
        <div className="min-h-screen">
          <div className="py-8 px-8 mt-24 border shadow-md  bg-white rounded-md ">
            <h1 className="text-4xl font-semibold text-[#1cc65e] ">
              {" "}
              Difference between SQL and NoSQL
            </h1>

            <p className="text-lg mt-6 mb-4">
              Structured Query language (SQL) pronounced as “S-Q-L” or sometimes
              as “See-Quel” is the standard language for dealing with Relational
              Databases. A relational database defines relationships in the form
              of tables. SQL programming can be effectively used to insert,
              search, update, delete database records.
            </p>
            <p className="text-lg mt-6 mb-4">
              NoSQL is a non-relational DMS, that does not require a fixed
              schema, avoids joins, and is easy to scale. NoSQL database is used
              for distributed data stores with humongous data storage needs.
              NoSQL is used for Big data and real-time web apps. For example
              companies like Twitter, Facebook, Google that collect terabytes of
              user data every single day.
            </p>
          </div>
          <div className="py-8 px-8 mt-24 border shadow-md  bg-white  rounded-md ">
            <h1 className="text-4xl font-semibold text-[#1cc65e]  text-center">
              {" "}
              What is JWT, and how does it work?
            </h1>

            <p className="text-lg mt-6 mb-4">
              JWT, or JSON Web Token, is an open standard used to share security
              information between two parties — a client and a server. Each JWT
              contains encoded JSON objects, including a set of claims. JWTs are
              signed using a cryptographic algorithm to ensure that the claims
              cannot be altered after the token is issued.
            </p>
            <p className="text-lg mt-6 mb-4">
              The JOSE (JSON Object Signing and Encryption) header contains the
              type of token — JWT in this case — and the signing algorithm. The
              payload contains the claims. This is displayed as a JSON string,
              usually containing no more than a dozen fields to keep the JWT
              compact. This information is typically used by the server to
              verify that the user has permission to perform the action they are
              requesting. Here are no mandatory claims for a JWT, but overlaying
              standards may make claims mandatory. For example, when using JWT
              as bearer access token under OAuth2.0, iss, sub, aud, and exp must
              be present. some are more common than others. The signature
              ensures that the token hasn’t been altered. The party that creates
              the JWT signs the header and payload with a secret that is known
              to both the issuer and receiver, or with a private key known only
              to the sender. When the token is used, the receiving party
              verifies that the header and payload match the signature.
            </p>
          </div>
          <div className="py-8 px-8 mt-24 border shadow-md  bg-white  rounded-md ">
            <h1 className="text-4xl font-semibold text-[#1cc65e]  text-center">
              {" "}
              What is the difference between javascript and NodeJS?
            </h1>

            <p className="text-lg mt-6 mb-4">
              NodeJS is a cross-platform and opensource Javascript runtime
              environment that allows the javascript to be run on the
              server-side. Nodejs allows Javascript code to run outside the
              browser. Nodejs comes with a lot of modules and mostly used in web
              development.
            </p>
            <p className="text-lg mt-6 mb-4">
              Javascript is a Scripting language. It is mostly abbreviated as
              JS. It can be said that Javascript is the updated version of the
              ECMA script. Javascript is a high-level programming language that
              uses the concept of Oops but it is based on prototype inheritance.
            </p>
          </div>
          <div className="py-8 px-8 mt-24 mb-20 border shadow-md  bg-white rounded-md ">
            <h1 className="text-4xl font-semibold text-[#1cc65e] text-center">
              {" "}
              How does NodeJS handle multiple requests at the same time?
            </h1>

            <p className="text-lg mt-6 mb-4">
              Node.js accepts the request from the clients and sends the
              response, while working with the request node.js handles them with
              a single thread. To operate I/O operations or requests node.js use
              the concept of threads. Thread is a sequence of instructions that
              the server needs to perform. It runs parallel on the server to
              provide the information to multiple clients. Node.js is an event
              loop single-threaded language. It can handle concurrent requests
              with a single thread without blocking it for one request.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Blog;
