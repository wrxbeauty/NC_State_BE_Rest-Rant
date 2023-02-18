# Rest Rant - Part One

This is the first step in creating our fully featured Rest Rant app

| Method | Path | Purpose |
| ------ | ---- | ------- |
| GET | / | Homepage |
| GET | /places | List all places |
| POST | /places | Create new place |
| GET | /places/new | Form page for creating a new place |
| GET | /places/:id | Details about a particular place |
| PUT | /places/:id | Update a particular place |
| GET | /places/:id/edit | Form page for editing an existing place |
| DELETE | /places/:id | Delete a particular place |
| POST | /places/:id/rant | Create a rant (comment) about a particular place |
| DELETE | /places/:id/rant/rantId | Delete a rant (comment) about a particular place |
| GET | * | 404 page (matches any route not defined above) |

---

1. As a dev, I need to request data from the server about a spectific place using a new endpoint, so I can populate the places detail page
2. As a user, I need a place to view the specific details of one of my pages on a new JSX page, so I can use the app
3. As a user, I need to edit a place using a new place editing form page, so I can change the data for one of my existing places
4. 