const axios = require('axios');

async function testPostUniversityRequest() {
  try {
    const response = await axios.post('http://localhost:3000/university', {
      name: 'Sofia University',
      town: 'Sofia'
    });
    console.log('Response data:', response.data);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}

async function testPostSubjectRequest() {
  try {
    const response = await axios.post(`http://localhost:3000/subject`, {
      name: 'Physics',
    });
    console.log('Subject POST response:', response.data);
  } catch (error) {
    console.error('Subject POST error:', error.response ? error.response.data : error.message);
  }
}


async function testPostUserRequest() {
  try {
    const response = await axios.post('http://localhost:3000/user', {
      name: 'John Doe',
      email: 'johndoe@example.com',
      universityId: 1,
      subjects: [1],
    });
    console.log('Response data:', response.data);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}

async function testGetUsersRequest() {
  try {
    const response = await axios.get(`http://localhost:3000/user`);
    console.log('Users GET response:', JSON.stringify(response.data, null, 2));
  } catch (error) {
    console.error('Users GET error:', error.response ? error.response.data : error.message);
  }
}




(async () => {
  console.log('Testing POST /university...');
  await testPostUniversityRequest();

  console.log('Testing POST /subject...');
  await testPostSubjectRequest();

  console.log('Testing POST /user...');
  await testPostUserRequest();

  console.log('Testing GET /user...');
  await testGetUsersRequest();
})()