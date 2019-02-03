import React from 'react';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
      <table>
        <tbody>
          <tr>
            <th>Repo Name:</th>
          </tr>
          <tr>
            {props.repos.map(function (repo, i) {
              return <td key={i}>{repo.owner.login}</td>
            })
            }
          </tr>
        </tbody>
      </table>
  </div>
)

export default RepoList;

// {props.repos.map((repo, i) =>
//       <div  key={i}>{repo.owner.login}</div>
//     )}