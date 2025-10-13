import { BrowserRouter, Route, Routes } from "react-router-dom"
import Recipe from "./Pages/Recipe"
import RecipeDetail from "./Pages/RecipeDetail"

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Recipe/>} />
        <Route path="/:id" element={<RecipeDetail/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
