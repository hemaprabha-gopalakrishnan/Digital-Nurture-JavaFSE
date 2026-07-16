function BookDetails() {

    const books = [

        {
            id:1,
            name:"React in Action",
            author:"Mark Tielens",
            price:550
        },

        {
            id:2,
            name:"Learning React",
            author:"Alex Banks",
            price:620
        }

    ];

    return (

        <div>

            <h2>Book Details</h2>

            <ul>

                {

                    books.map(book =>

                        <li key={book.id}>

                            {book.name} | {book.author} | ₹{book.price}

                        </li>

                    )

                }

            </ul>

        </div>

    );

}

export default BookDetails;