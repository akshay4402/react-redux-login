import React, { Component } from 'react';
import Main from './Main';
import AuthService from '../services/AuthService';


var userlist = [];

// const list = () => {
//   AuthService.list().then(resp => {
//     // console.log(resp.data.results)
//     userlist = resp.data.results;
//   }).catch(error => {
//     console.log(error);
//   });
// }

// list();

// setTimeout(() => {
//   console.log(userlist)
// }, 1000);

// const HomePage = () => (
//   <Main>
//       <ul>
//       {userlist.map((value, index) => {
//         return <li key={index}>{value.user.email}</li>
//       })}
//     </ul>
//   </Main>
// )


class HomePage extends Component {
  constructor () {
    super()
    this.state = { userlist: [] }
  }

  componentDidMount() {
    AuthService.list().then(resp => {
      // console.log(resp.data.results)
      // userlist = resp.data.results;
      this.setState({ userlist: resp.data.results })
    }).catch(error => {
      console.log(error);
    });
  }

  render () {
    const { userlist } = this.state
    return (
      <Main>
      <table>
        <tbody>
                <th>
                  <td>First Name</td>
                  <td>Middle Name</td>
                  <td>Email</td>
                </th>
                <tr>
                {userlist.map((value, index) => {
                // return <li key={index}>{value.user.email}</li>
                return <tr key={index}>
                        <td>{value.user.name.first}</td>
                        <td>{value.user.name.last}</td>
                        <td>{value.user.email}</td>

                      </tr>
              })}
            </tr>
        </tbody>
      </table>
      </Main>
    )
  }
}

export default HomePage;
