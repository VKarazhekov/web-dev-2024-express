const axios = require('axios');

// async function testPostRequest() {
//   try {
//     const response = await axios.post('http://localhost:3000/user', {
//       name: 'Alice Johnson',
//       email: 'alice@example.com'
//     });
//     console.log('Response data:', response.data);
//   } catch (error) {
//     console.error('Error:', error.response ? error.response.data : error.message);
//   }
// }

// async function testPostRequest() {
//   try {
//     const response = await axios.post('http://localhost:3000/university', {
//       name: 'New Bulgarian University'
//     });
//     console.log('Response data:', response.data);
//   } catch (error) {
//     console.error('Error:', error.response ? error.response.data : error.message);
//   }
// }

// async function testPatchRequest() {
//   try {
//     const response = await axios.patch('http://localhost:3000/university/3/update-university', {
//       id: 3,
//       name: 'University of National and World Economy'
//     });
//     console.log('Response data:', response.data);
//   } catch (error) {
//     console.error('Error:', error.response ? error.response.data : error.message);
//   }
// }

// testPatchRequest();

// async function testPatchRequest() {
//   try {
//     const response = await axios.patch('http://localhost:3000/user/2/update-subjects', {
//       subjects : ['chem', 'phylosophy', 'physics']
//     });
//     console.log('Response data:', response.data);
//   } catch (error) {
//     console.error('Error:', error.response ? error.response.data : error.message);
//   }
// }

async function testPatchRequest() {
  try {
    const response = await axios.patch('http://localhost:3000/user/2/update-university', {
      uni: 'UNWE'
    });
    console.log('Response data:', response.data);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}

testPatchRequest();

//testPostRequest();
