
const data = [{
  values: [90, 85, 85, 50, 80], 
  labels: ['JAVA', 'Python', 'C++', 'JavaScript', 'HTML/CSS'], 
  type: 'pie',
  textinfo: 'label+percent',
  insidetextorientation: 'radial',
  marker: {
      colors: ['red','yellow','green','orange','blue']
  }
}];

const layout = {
  title: 'Skill Proficiency',
  height: 400,
  width: 400,
  showlegend: false,
  margin: { t: 50, b: 20, l: 20, r: 20 }
  
};

Plotly.newPlot('skills-chart', data, layout);