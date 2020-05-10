import React from 'react';

class Filters extends React.Component {

	handleSearch(value) {
		const result = this.props.data.filter(contact => {
		  if(contact.name.search(new RegExp(value, "gi")) !== -1)
			return true;
		  return false;
		});
		this.props.changeData(result);
	}

	handleClick(event, filter, order = 0) {
		const buttons = document.getElementsByTagName("button");
		if(event.target.tagName !== "BUTTON") {
			event.target = event.target.parentElement;	
		}
		event.target.classList.toggle('round');

		if(event.target.classList.contains('round'))
			order = 1;
		
		for(let button of buttons) {
			if(button.classList.contains("is-selected")) {
				button.classList.toggle("is-selected");
			}
			if(button === event.target) {
			button.classList.toggle("is-selected");
			}
		}

		this.filterContacts(filter, order);
	}

	filterContacts(filter, order) {
		filter = String(filter);
		const sorted = this.props.data.sort((a, b) => {
			if(order % 2 === 1) {
				if(a[filter] < b[filter])
					return -1;
				if(a[filter] > b[filter])
					return 1;
				return 0;
			} else {
				if(a[filter] > b[filter])
					return -1;
				if(a[filter] < b[filter])
					return 1;
				return 0;
			}
		});
		this.props.changeData(sorted);
	}

	render() {
		return (
		<div data-testid="filters" className="container">
          <section className="filters">
            <div className="filters__search">
              <input onChange={event => this.handleSearch(event.target.value)} type="text" className="filters__search__input" placeholder="Pesquisar" />

              <button className="filters__search__icon">
                <i className="fa fa-search"/>
              </button>
            </div>

            <button onClick={(event) => this.handleClick(event, "name")} className="filters__item is-selected">
              Nome <i className="fas fa-sort-down" />
            </button>

            <button onClick={(event) => this.handleClick(event, "country")} className="filters__item">
              País <i className="fas fa-sort-down" />
            </button>

            <button onClick={(event) => this.handleClick(event, "company")} className="filters__item">
              Empresa <i className="fas fa-sort-down" />
            </button>

            <button onClick={(event) => this.handleClick(event, "department")} className="filters__item">
              Departamento <i className="fas fa-sort-down" />
            </button>

            <button onClick={(event) => this.handleClick(event, "admissionDate")} className="filters__item">
              Data de admissão <i className="fas fa-sort-down" />
            </button>
          </section>
        </div>
		);
	}
}

export default Filters;
