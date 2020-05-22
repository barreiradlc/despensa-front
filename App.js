
import AsyncStorage from '@react-native-community/async-storage';

import * as React from 'react';

import { ApolloProvider } from 'react-apollo';
import { YellowBox } from 'react-native';

import Navigator from './src/components/Navigator'
import QueueProcess from './src/components/QueueProcess'
import client from './src/components/apollo';
import UserProvider from  './src/components/state/Provider'

console.disableYellowBox = true;

function App() {

  const [ token, setToken ] = React.useState()
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    getToken()
  }, [])
  
  async function getToken(){
    const value = await AsyncStorage.getItem('@token');
    setToken(value)
    setLoading(false)
  }

  if(loading){
    return null
  }

  return (
    <UserProvider>
      <ApolloProvider client={client} >
        <Navigator token={token} />
        {/* <QueueProcess /> */}
      </ApolloProvider>
    </UserProvider>
  );
}

export default App;



// const Realm = require('realm');
// import React, { Component } from 'react'
// import { View, Text } from 'react-native'

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { realm: null };
//   }

//   componentDidMount() {
//     Realm.open({
//       schema: [{name: 'Dog', properties: {name: 'string'}}],
//       schemaVersion: 10

//     }).then(realm => {

//       console.log(realm)
//       realm.write(() => {
//         realm.create('Dog', {name: 'Rex'});
//       });
//       this.setState({ realm });
//     });
//   }

//   componentWillUnmount() {
//     // Close the realm if there is one open.
//     const {realm} = this.state;
//     if (realm !== null && !realm.isClosed) {
//       realm.close();
//     }
//   }

//   render() {
//     const info = this.state.realm
//       ? 'Number of dogs in this Realm: ' + this.state.realm.objects('Dog').length
//       : 'Loading...';

//     return (
//       <View >
//         <Text >
//           {info}
//         </Text>
//       </View>
//     );
//   }
// }

// export default App



// query getItems{
//   despensas {
//     descricao
//     nome
//     items {
//       id
//       createdAt
//     }
//     users {
//       id
//     }  
//   }
// }


// mutation addDespensa($despensa:DespensaInput!){
//   addDespensa(attributes: $despensa){
//     despensa {
//       id
//       items {
//         id
//         provimento {
//           id
//           nome
//         }
//       }
//     }
    
//   }
// }

// mutation updateDespensa($id: ID!, $despensa: DespensaInput!){
//   updateDespensaMutation(id: $id, attributes: $despensa){
//     despensa {
//       id
//       nome
//     }
//   }
// }

// # mutation deleteDespensa($id: ID!){
// # 	deleteDespensaMutation(id:$id){
    
// #   }
// # }


// mutation handleDepensasMutation($despensas: [DespensaInput!]!){
//   handleDespensaMutation(despensas: $despensas)  {
//     despensas {
//       id
//       nome
//       descricao
//       items{
//         id
//         quantidade
//         provimento{
//           id
//           nome
//         }
        
//       }
      
//     }
//   }
// }

// mutation addReceita($receita:ReceitaInput!){
//   addReceitaMutation(attributes:$receita){
//     receitum {
//       id
//       createdAt
//       descricao
//       nome
//       updatedAt
//      	ingredientes {
//         id 
//         provimento{
//           nome
//         } 
//     	}
//       passos{
//         descricao
//         posicao
//       }
//   	}
// 	}
// }


// mutation updateReceita($id: ID!, $receita: ReceitaInput!){
//   updateReceitaMutation(id: $id, attributes: $receita){
//     receitum {
//       createdAt
//       descricao
//       nome
//       updatedAt
//       ingredientes{
//         id
//         provimento{
//           nome
//         }
//       }
//       passos{
//         id
//         descricao
//         posicao
//       }
//     }
//   }
// }

// query getReceita( $id: ID! ){
//   receita( id:$id ) {
//     id
//   }
// }

// query getreceitas($q: String){
//   receitas(query:$q){
//     id
//   }
// }


// {
//   "attributes": {
// 		"email":"user@123.com",
// 		"password":"pass123"	  
//   },
//   "id": 10,
//   "receita": {
//     "nome": "Omelete",
//     "descricao": "Receita rapida de uma omelete deliciosa",
//     "ingredientes": [
//       {
//         "id": 32,
//         "quantidade": 2,
//         "provimento": {
//           "nome": "Ovo"
//         }
//       },
//       {
//         "id": 31,
//         "quantidade": 1,
//         "provimento": {
//           "nome": "Cebola"
//         } 
//       }
//     ],
//     "passos":[
//       {
//         "posicao": 0,
//         "descricao": "Esquente a frigideira"
//       },
//       {
//         "posicao": 1,
//         "descricao": "Enquanto a frigideira esquenta, Quebre os ovos"
//       }
//     ]
//   },
//   "despensas":[
//       {
//         "id":11,
//         "descricao": "Armario da cozinha",
//         "nome": "Armario",
//         "items": [
//           {
//             "quantidade": 2,
//             "provimento": {
//               "nome": "Macarrão"
//             }
//           },
          
//           {
//             "id": 60,
//             "quantidade": 1,
//             "provimento": {
//               "nome": "Cereal"
//             }
//           }
//         ]
//       },
//       {
//         "id": 21,
//         "descricao": "Geladeira da cozinha",
//         "nome": "Geladeira",
//         "items": [
//           {
//             "id": 32,
//             "quantidade": 2,
//             "provimento": {
//               "nome": "Acerola"
//             }
//           }
//         ]
//       }
// 	],
// 	"despensa": {  
//     "items": [
//       {
//        "quantidade": 2,
//       	"provimento": {
//         	"nome": "Feijão"
//         }
//       },
//       {
//        "quantidade": 4,
//       	"provimento": {
//         	"nome": "Maracujá"
//         }
//       }
//       ] 
//     }    
// }


// mutation sigUp($attributes: CredentialsInput!){
//   signUp(attributes:$attributes)
//   {
//     user {
//       id
//     }
//   }
// }


// query users{
//   users(query:"") {
//     id
//     username
//     email
//     fullName
//     despensas {
//       id
//     }
//     convites {
//       id
//       mensagem
//       usuarioSolicitacao
//       despensaId
//     }
//   }
// }

// mutation createConvite($id: Int!, $convite: ConviteInput!){
//   addConviteMutation(id: $id, convite: $convite)
//   {
//     convite {
//       usuarioSolicitacao
//       id
//       mensagem      
//     }
//   }
// }


// mutation handleConvite($id: Int, $aceita: Boolean!){
// 	responseConviteMutation(id: $id, aceita: $aceita)
//   {
//   	response {
  //   	  id
//       nome
//       descricao
//       items {
//         id
//         quantidade
//         validade
//         provimento{
//           id
//           nome
//         }
//       }
//   	}
//   }
// }

