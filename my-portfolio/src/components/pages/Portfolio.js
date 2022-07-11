import React from 'react';

export default function Portfolio(props) {
  return (
    <div>
      <ul>
        {props.works.map(item => (
          <li key={item.id}>
            {item.name}
            {item.deployedApp}
            {item.githubRepo}
          </li>
        ))}
      </ul>
    </div>
  );
}
