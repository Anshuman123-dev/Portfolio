import React from 'react';

const FullStackDiagram = () => {
  const radius = 100;

  // Technology list with corrected image paths
  const technologies = [
    { name: 'Node.js', src: '/assets/nodejs.png' },
    { name: 'Next.js', src: '/assets/nextjs.png' },
    { name: 'MySQL', src: '/assets/mySQL.png' },
    { name: 'React', src: '/assets/reactjs.png' },
    { name: 'MongoDB', src: '/assets/mongoDB.png' },
    { name: 'JavaScript', src: '/assets/javascript.png' },
  ];

  return (
    <div style={{
      position: 'relative',
      width: '300px',
      height: '300px',
      backgroundColor: '#d3d3d3',
    }}>
      {/* Central Badge */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        backgroundColor: 'white',
        border: '2px solid gray',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <span style={{
          color: 'blue',
          fontWeight: 'bold',
          fontSize: '16px',
          textAlign: 'center',
        }}>
          FULL STACK
        </span>
      </div>

      {/* Technology Icons */}
      {technologies.map((tech, index) => {
        const angle = (270 + 60 * index) % 360;
        const radian = angle * (Math.PI / 180);
        const offsetX = radius * Math.cos(radian);
        const offsetY = radius * Math.sin(radian);

        return (
          <div
            key={index}
            style={{
              position: 'absolute',
              left: `calc(50% + ${offsetX}px)`,
              top: `calc(50% + ${offsetY}px)`,
              transform: 'translate(-50%, -50%)',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: 'gray',
            }}
          >
            <img
              src={tech.src}
              alt={tech.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                padding: '8px',
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default FullStackDiagram;