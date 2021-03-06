const Pagination = {

    code: '',

    // --------------------
    // Utility
    // --------------------

    // converting initialize data
    Extend: function(data) {
        data = data || {};
        Pagination.size = data.size || 100;
        Pagination.page = data.page || 1;
        Pagination.step = data.step || 3;
    },

    // add pages by number (from [s] to [f])
    Add: function(s, f) {
        for (let i = s; i < f; i++) {
            Pagination.code += '<a class="pagination__page">' + i + '</a>';
        }
    },

    // add last page with separator
    Last: function() {
        Pagination.code += '<i>...</i><a class="pagination__page">' + Pagination.size + '</a>';
    },

    // add first page with separator
    First: function() {
        Pagination.code += '<a class="pagination__page">1</a><i>...</i>';
    },



    // --------------------
    // Handlers
    // --------------------

    // change page
    Click: function() {
        Pagination.page = +this.innerHTML;
        Pagination.Start();
    },

    // previous page
    Prev: function() {
        Pagination.page--;
        if (Pagination.page < 1) {
            Pagination.page = 1;
        }
        Pagination.Start();
    },

    // next page
    Next: function() {
        Pagination.page++;
        if (Pagination.page > Pagination.size) {
            Pagination.page = Pagination.size;
        }
        Pagination.Start();
    },



    // --------------------
    // Script
    // --------------------

    // binding pages
    Bind: function() {
        let a = Pagination.e.getElementsByTagName('a');
        for (let i = 0; i < a.length; i++) {
            if (+a[i].innerHTML === Pagination.page) a[i].className = 'current';
            a[i].addEventListener('click', Pagination.Click, false);
        }
    },

    // write pagination
    Finish: function() {
        Pagination.e.innerHTML = Pagination.code;
        Pagination.code = '';
        Pagination.Bind();
    },

    // find pagination type
    Start: function() {
        if (Pagination.size < Pagination.step * 2 + 6) {
            Pagination.Add(1, Pagination.size + 1);
        }
        else if (Pagination.page < Pagination.step * 2 + 1) {
            Pagination.Add(1, 4);
            Pagination.Last();
        }
        else if (Pagination.page > Pagination.size - Pagination.step * 2) {
            Pagination.First();
            Pagination.Add(Pagination.size - Pagination.step * 2 - 2, Pagination.size + 1);
        }
        else {
            Pagination.First();
            Pagination.Add(Pagination.page - Pagination.step, Pagination.page + Pagination.step + 1);
            Pagination.Last();
        }
        Pagination.Finish();
        Pagination.checkButtons();
    },



    // --------------------
    // Initialization
    // --------------------

    // binding buttons
    Buttons: function(e) {
        let prev = e.querySelector('.pagination__prev');
        let next = e.querySelector('.pagination__next');
        prev.addEventListener('click', Pagination.Prev, false);
        next.addEventListener('click', Pagination.Next, false);
    },

    // create skeleton
    Create: function(e) {

        let html = [
            '<button class="pagination__prev"></button>', // previous button
            '<span class="pagination__list"></span>',  // pagination container
            '<button class="pagination__next"></button>'  // next button
        ];

        e.innerHTML = html.join('');
        Pagination.e = e.querySelector('.pagination__list');
        Pagination.Buttons(e);
    },

    checkButtons: function() {
        let prev = document.querySelector('.pagination__prev');
        let next = document.querySelector('.pagination__next');
        let current =  document.querySelector('.current');
        let size = String(Pagination.size);
        prev.disabled = current.innerHTML === "1";
        next.disabled = current.innerHTML === size;
    },

    // init
    Init: function(e, data) {
        Pagination.Extend(data);
        Pagination.Create(e);
        Pagination.Start();
    }
};



/* * * * * * * * * * * * * * * * *
* Initialization
* * * * * * * * * * * * * * * * */

let init = function() {
    Pagination.Init(document.querySelector('.pagination'), {
        size: 15, // pages size
        page: 1,  // selected page
        step: 1   // pages before and after current
    });
};

document.addEventListener('DOMContentLoaded', init, false);

