import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
//import Seo from "../components/seo"

const GatsbyPage = () => (
  <Layout>
    {/*<Seo title="Gatsby Page" />*/}
    <div className="text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Gatsby Page!</h1>
      <p className="text-lg text-gray-600 mb-8">
        This is a sample page created using Gatsby.
      </p>
      <Link to="/" className="text-blue-500 hover:underline">
        Go back to home
      </Link>
    </div>
  </Layout>
)

export default GatsbyPage
