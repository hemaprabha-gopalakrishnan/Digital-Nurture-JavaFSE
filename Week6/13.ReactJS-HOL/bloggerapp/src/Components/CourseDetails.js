function CourseDetails() {

    const courses=[

        {
            id:1,
            name:"React",
            duration:"30 Days"
        },

        {
            id:2,
            name:"Angular",
            duration:"45 Days"
        }

    ];

    return(

        <div>

            <h2>Course Details</h2>

            <ul>

                {

                    courses.map(course=>

                        <li key={course.id}>

                            {course.name} - {course.duration}

                        </li>

                    )

                }

            </ul>

        </div>

    );

}

export default CourseDetails;