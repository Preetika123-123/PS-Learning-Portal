import Sidebar from "../components/Sidebar";
const reviews = [
  {
    no: 1,
    course: "C Programming Level - 1",
    slot: "23 Sep 2024 (11:30 am - 12:30 pm)",
    comment: "Gives e is Consonant"
  },

  {
    no: 2,
    course: "Design Challenge",
    slot: "02 Jan 2025 (12:01 am - 11:59 pm)",
    comment: "copied from website"
  },

  {
    no: 3,
    course: "HTML / CSS - Level 1",
    slot: "18 Mar 2026 (08:45 am - 10:35 am)",
    comment:
      "Strong implementation demonstrating good understanding of scope"
  },

  {
    no: 4,
    course:
      "New Product Development and Innovations - Level 1D - Artistic Design Vertical",
    slot: "03 Nov 2024 (12:00 am - 08:00 pm)",
    comment:
      "Follow the rules for Logo Design Challenge"
  },

  {
    no: 5,
    course: "Programming Python Level - 2",
    slot: "19 May 2025 (11:40 am - 12:40 pm)",
    comment:
      "Not working for two cases. Final value 0 not prints for both case."
  }

];


function CodeReview() {
  return (
    <div className="app-layout">
      <Sidebar />
      <main className="main-content">
        <div className="review-container">
          <h1>
            Code Review
          </h1>
          <div className="review-tools">
            <input
              type="text"
              placeholder="Search..."
            />
          </div>


          <div className="table-wrapper">

            <table>

              <thead>

                <tr>

                  <th>
                    S. No
                  </th>

                  <th>
                    Course Name ↕
                  </th>

                  <th>
                    Slot ↕
                  </th>

                  <th>
                    Comments ↕
                  </th>

                </tr>

              </thead>


              <tbody>

                {reviews.map((review) => (

                  <tr key={review.no}>

                    <td>
                      {review.no}
                    </td>

                    <td>
                      {review.course}
                    </td>

                    <td>
                      {review.slot}
                    </td>

                    <td>
                      {review.comment}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>


          <div className="table-footer">

            <span>
              Page 1 of 1
            </span>

            <span>
               Rows per page: 10
            </span>

          </div>

        </div>

      </main>

    </div>
  );
}

export default CodeReview;