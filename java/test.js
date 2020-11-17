int h; cin >> h;
    for (int i=0; i<h; i++) 
    {
        for (int j = 1; 
            j < h - i; 
            j++)
            cout << ``;
        for (int j = h - 2*i; 
            j <= h; 
            j++)
            cout << `*`;
            cout << endl;
    }
