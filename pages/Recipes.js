import Nav from '../components/Nav.js'
import NavItem from '../components/NavItem.js'
import List from '../components/List.js'
import ListItem from '../components/ListItem.js'

export default function Recipes({ recipes }) {
  return (
    <>
    <div className="divide-y divide-gray-100">
      <Nav>
        <NavItem href="/featured" isActive>Featured</NavItem>
        <NavItem href="/popular">Popular</NavItem>
        <NavItem href="/recent">Recent</NavItem>
      </Nav>
      {/*<List>
        {recipes.map((recipe) => (
          <ListItem key={recipe.id} recipe={recipe} />
        ))}
      </List>*/}
    </div>
    </>
  )
}
