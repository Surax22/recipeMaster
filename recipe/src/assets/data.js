import gql from "graphql-tag";
// const ALL_CAT = gql`
// query ALL_CAT{
//   categories{
//     cat_id
//     cat_name
//   }
// }
//  `;
 
export const COM =gql` 
query COM{
  comments{
          id
          is_like
          comment
          is_like
          duration
          account_id
    recipe{
     id
    }
  }

}
`

export const REC = gql`
    query REC{
        recipes{
              id
              title
              image
              ingridient
              duration
              discription
              category_id
                  category{
                    cat_id
                    cat_name
                  }
              comment{
                    id
                    is_like
                    comment
                    is_like
                    duration
                    account_id
                  }
                }
              }
               `;

export const ADD_RECIPE = gql`
mutation Recipes(
  $image:String!  
  $title: String!
  $duration: String!
  $ingridient: String!
  $discription: String!
  $category_id: Int!
) {
  insert_recipes(
    objects: [
      {
        image:$image
        title:$title 
        duration:$duration 
        ingridient:$ingridient
        discription:$discription
        category_id:$category_id
        
        
      }
    ]
      ){
    returning {
      id
      
    }
  }
}
`;



