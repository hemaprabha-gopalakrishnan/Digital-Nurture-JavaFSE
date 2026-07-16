import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

function Blogger() {

    const showBooks=true;

    const showBlogs=true;

    const showCourses=false;

    let courseComponent;

    if(showCourses){

        courseComponent=<CourseDetails/>;

    }

    return(

        <div>

            <h1>Blogger Application</h1>

            {/* if using && */}

            {

                showBooks && <BookDetails/>

            }

            {/* Ternary */}

            {

                showBlogs ?

                <BlogDetails/>

                :

                <h3>No Blogs Available</h3>

            }

            {/* Element Variable */}

            {

                courseComponent

            }

        </div>

    );

}

export default Blogger;