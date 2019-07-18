
class UnitOfWork {
    constructor(repositoryFactoy) {
        this.repositoryFactoy = repositoryFactoy;
    }

    getRepository(TEntity) {
        // TODO: figure out the way enum work to return correct Entity repository
        return this.repositoryFactoy.getByType(TEntity);
    }

    commit() {
        // TODO: save db regarding changes.

    }
}

module.exports = UnitOfWork;