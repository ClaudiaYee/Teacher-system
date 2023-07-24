// Array of staff members
var staffMembers = [
    {
        name: 'Staff Member 1',
        bio: 'Brief bio...',
        image: 'staff1.jpg'
    },
    // More staff members...
];

// Array of news articles
var newsArticles = [
    {
        title: 'News Item 1',
        content: 'News content...'
    },
    // More news articles...
];

// Add staff members to the page
$.each(staffMembers, function(i, staffMember) {
    var staffMemberElement = $(
        '<div class="col-md-4">' +
            '<div class="card mb-4">' +
                '<img class="card-img-top" src="' + staffMember.image + '" alt="Card image cap">' +
                '<div class="card-body">' +
                    '<h5 class="card-title">' + staffMember.name + '</h5>' +
                    '<p class="card-text">' + staffMember.bio + '</p>' +
                '</div>' +
            '</div>' +
        '</div>'
    );

    $('#staffSection').append(staffMemberElement);
});

// Add news articles to the page
$.each(newsArticles, function(i, newsArticle) {
    var newsArticleElement = $(
        '<div class="col-md-4">' +
            '<div class="card mb-4">' +
                '<div class="card-body">' +
                    '<h5 class="card-title">' + newsArticle.title + '</h5>' +
                    '<p class="card-text">' + newsArticle.content + '</p>' +
                '</div>' +
            '</div>' +
        '</div>'
    );

    $('#newsSection').append(newsArticleElement);
});
// Add click event to staff cards
$('.staff-card').on('click', function() {
    var staffId = $(this).data('staff-id');
    var staffMember = staffMembers[staffId];

    // Fill modal with staff details
    $('#staffModalLabel').text(staffMember.name);
    $('#staffModalBody').text(staffMember.bio);

    // Show the modal
    $('#staffModal').modal('show');
});

$('#search').on('input', function() {
    var searchValue = $(this).val().toLowerCase();

    // Search staff members
    $('#staffSection .card').filter(function() {
        $(this).toggle($(this).find('.card-title').text().toLowerCase().indexOf(searchValue) > -1)
    });

    // Search news articles
    $('#newsSection .card').filter(function() {
        $(this).toggle($(this).find('.card-title').text().toLowerCase().indexOf(searchValue) > -1)
    });
});
var staffMembers = [
    {
        name: 'Staff Member 1',
        bio: 'Brief bio...',
        image: 'staff1.jpg',
        role: 'Engineer'
    },
    // More staff members...
];
var newsArticles = [
    {
        title: 'News Item 1',
        content: 'News content...',
        category: 'Company News'
    },
    // More news articles...
];
$('.news-card').on('click', function() {
    var newsId = $(this).data('news-id');
    var newsArticle = newsArticles[newsId];

    // Fill modal with news details
    $('#newsModalLabel').text(newsArticle.title);
    $('#newsModalBody').text(newsArticle.content);

    // Show the modal
    $('#newsModal').modal('show');
});
// Add click event to news cards
$('.news-card').on('click', function() {
    var newsId = $(this).data('news-id');
    var newsArticle = newsArticles[newsId];

    // Fill modal with news details
    $('#newsModalLabel').text(newsArticle.title);
    $('#newsModalBody').text(newsArticle.content);

    // Show the modal
    $('#newsModal').modal('show');
});
