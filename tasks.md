1. Create /university endpoints with GET, POST and DELETE Methods
2. Each user must have an University as part of their JSON structure
3. Add `PATCH` `/update-university` request in user to update the university. Pass `{universityId: 3}` in body.
4. Add an array to user called `subjects` containing string elements. Add patch request for updating the `subjects` array. `subjects: ['maths', 'IT', 'Bio']`