import React from 'react';
import { SimpleGrid } from "@mantine/core"

export default function Portfolio(props) {
  return (
    <SimpleGrid cols={2}
    breakpoints={[
      { maxWidth: 820, cols: 1, spacing: 'sm' },
    ]}
    >
      {props.works.map(item => 
      <div key={item.id}>
        <img src={item.image} alt={`Project ${item.id}`} />
      </div>
      )
      }
    </SimpleGrid>
  );
}

// export default function Portfolio(props) {
//   return (
//     <div>
//       <ul>
//         {props.works.map(item => (
//           <li key={item.id}>
//             {item.name}
//             {item.deployedApp}
//             {item.githubRepo}
//             <img src={item.image} alt={`Project ${item.id}`} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
