exports.check = (markoCompiler, expect) => {
    var taglibLookup = markoCompiler.taglibLookup;
    var transformers;
    var lookup;
    // lookup = taglibLookup.buildLookup(nodePath.join(__dirname, 'fixtures/nested'));

    // transformers = [];
    // lookup.forEachTagTransformer('nested-foo', (transformer) => {
    //     transformers.push(transformer);
    // });

    // expect(transformers.length).to.equal(2);

    lookup = taglibLookup.buildLookup(__dirname);

    transformers = [];
    lookup.forEachTagTransformer("transform-foo", transformer => {
        transformers.push(transformer);
    });

    expect(transformers.length).to.equal(3);
    expect(transformers[0].path.indexOf("foo")).to.not.equal(-1);
    expect(transformers[1].path.indexOf("core-transformer")).to.not.equal(-1);
    expect(transformers[2].path.indexOf("components-transformer")).to.not.equal(
        -1
    );

    transformers = [];
    lookup.forEachTagTransformer("transform-bar", transformer => {
        transformers.push(transformer);
    });

    expect(transformers.length).to.equal(3);
    expect(transformers[0].path.indexOf("core-transformer")).to.not.equal(-1);
    expect(transformers[1].path.indexOf("bar")).to.not.equal(-1);
    expect(transformers[2].path.indexOf("components-transformer")).to.not.equal(
        -1
    );
};
